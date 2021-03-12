export function RepositoryItem (props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>{props.repository?.description ?? 'default'}</p>
      <a href={props.repository?.html_url ?? '#'}>Repo in react</a>
    </li>
  );
}