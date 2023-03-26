export function RepositoryItem(props){
    return(
        <li>
          <strong>{props.repository.name ?? 'default name'}</strong>
          <p>{props.repository.description ?? 'default description'}</p>

          <a href={props.repository.link}>Acessar repositórios</a>
        </li>
    );
}