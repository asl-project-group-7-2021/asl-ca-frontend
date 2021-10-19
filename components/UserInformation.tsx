import React, { FunctionComponent, useEffect, useMemo, useState } from "react";

import { Maybe, User } from "../utilities/types";
import { mutate } from "swr";
import Box from "../components/Box";
import Button from "../components/form/Button";
import Flex from "../components/Flex";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import Note from "../components/Note";

const UserInformation: FunctionComponent<{
  user: Maybe<User>;
  token: Maybe<string>;
  hasChanges: boolean;
  setHasChanges: (value: boolean) => void;
}> = ({ user, token, hasChanges, setHasChanges }) => {
  const [password, setPassword] = useState<Maybe<string>>(null);

  const [firstname, setFirstname] = useState(user?.firstname);
  const [lastname, setLastname] = useState(user?.lastname);
  const [email, setEmail] = useState(user?.email);

  useEffect(() => {
    const c =
      (password !== null && password !== "") ||
      firstname !== user?.firstname ||
      lastname !== user?.lastname ||
      email !== user?.email;

    if (c !== hasChanges) {
      setHasChanges(c);
    }
  }, [user, password, firstname, lastname, email]);

  const save = () => {
    fetch("/api/users/me", {
      method: "PUT",
      body: JSON.stringify({
        token,
        password,
        firstname,
        lastname,
        email,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        if ("error" in r) {
          //display error
        } else {
          mutate(["/api/users/me", token], r);
        }
      });
  };

  const reset = () => {
    setPassword(null);
    setFirstname(user?.firstname);
    setLastname(user?.lastname);
    setEmail(user?.email);
  };

  useEffect(() => {
    if (!firstname) {
      setFirstname(user?.firstname);
    }
    if (!lastname) {
      setLastname(user?.lastname);
    }
    if (!email) {
      setEmail(user?.email);
    }
  }, [user]);

  if (!user) {
    //TODO: show loading placeholder?
    return null;
  }

  return (
    <>
      <h1>User information</h1>
      <Flex>
        <Box widths={[1, 1, 1 / 2, 1 / 2, 1 / 2]} marginRight={0.5}>
          <Label>User ID</Label>
          <Input type="text" value={user.username || ""} readOnly />
          <Label>Password</Label>
          <Input
            type="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Note>
            Note: If you leave this field empty, the password won't be changed.
          </Note>
          <Button onClick={save} disabled={!hasChanges} marginRight>
            Save Changes
          </Button>
          <Button onClick={reset} disabled={!hasChanges}>
            Reset
          </Button>
        </Box>
        <Box widths={[1, 1, 1 / 2, 1 / 2, 1 / 2]} marginLeft={0.5}>
          <Label>Firstname</Label>
          <Input
            type="text"
            value={firstname || ""}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Label>Lastname</Label>
          <Input
            type="text"
            value={lastname || ""}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Label>E-Mail</Label>
          <Input
            type="text"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
      </Flex>
    </>
  );
};

export default UserInformation;
