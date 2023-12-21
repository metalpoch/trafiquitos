import { useState } from "react";
import useFetch from "../hooks/useFetch.js"
import Form from "./Form";

export default function Dashboard() {
  const [firstday, setFirstday] = useState(undefined);
  const [lastday, setLastday] = useState(undefined);
  const [ehealth, setEhealth] = useState("ehealth1");
  const [group, setGroup] = useState("RP-BBIP-ENLACES-INTERNACIONALES");

  const { data, loading, error } = useFetch({ url: "https://jsonplaceholder.typicode.com/todos/" });
  console.log(data)
  const handleForm = ({ field, value }) => {
    if (field === "firstday") setFirstday(value);
    if (field === "lastday") setLastday(value);
    if (field === "ehealth") setEhealth(value);
    if (field === "group") setGroup(value);
  };

  return (
    <>
      <h1>Form component</h1>
      <Form
        ehealth={ehealth}
        group={group}
        handle={handleForm}
      />

      <p>{firstday}</p>
      <p>{lastday}</p>
      <p>{ehealth}</p>
      <p>{group}</p>
    </>
  );
}
