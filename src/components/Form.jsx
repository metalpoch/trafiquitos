export default function Form({ ehealth, group, handle }) {
  return (
    <form className="border-purple-500 rounded-lg w-1/4 flex flex-wrap border-2 p-2 justify-center">
      <fieldset className="flex justify-evenly w-full">
        <label htmlFor="firstday">Firstday</label>
        <input
          id="firstday"
          type="date"
          onChange={({ target }) =>
            handle({ field: "firstday", value: target.value })
          }
        />
      </fieldset>
      <fieldset className="flex justify-evenly w-full">
        <label htmlFor="lastday">Lastday</label>
        <input
          id="lastday"
          type="date"
          onChange={({ target }) =>
            handle({ field: "lastday", value: target.value })
          }
        />
      </fieldset>
      <fieldset className="flex justify-evenly w-full">
        <label htmlFor="ehealth">eHealth</label>
        <input
          type="text"
	  id="ehealth"
	  value={ehealth}
          placeholder="eHealth"
          onChange={({ target }) =>
            handle({ field: "ehealth", value: target.value })
          }
        />
      </fieldset>
      <fieldset className="flex justify-evenly w-full">
        <label htmlFor="group">Group</label>
        <input
          type="text"
          id="group"
          value={group}
          placeholder="Group"
          onChange={({ target }) =>
            handle({ field: "group", value: target.value })
          }
        />
      </fieldset>
    </form>
  );
}
