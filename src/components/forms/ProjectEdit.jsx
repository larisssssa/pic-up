export const ProjectEdit = () => {
  return <><select
              value={updated.phase?.id}
              onChange={(e) => {
                const copy = { ...updated };
                copy.phaseId = parseInt(e.target.value);
                setUpdated(copy);
              }}
            >
              {statusList.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select></>
}