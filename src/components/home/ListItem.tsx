import { SFC } from "react";

type Props = {
  title: string;
  link: string;
};

const ListItem: SFC<Props> = (props: Props) => {
  const { title, link } = props;
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={link}>
        {title}
      </a>
    </li>
  );
};

export default ListItem;
