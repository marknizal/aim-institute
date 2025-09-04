import { List } from "./styles";

const Grid = ({ children, columns = {}, gap, className, style }) => {
  const COLUMNS = {
    mobile: 1,
    tablet: 2,
    default: 2,
    ...columns,
  };

  return (
    <List
      $columns={COLUMNS.default}
      $gap={gap}
      style={{
        "--columns-mobile": COLUMNS.mobile,
        "--columns-tablet": COLUMNS.tablet,
        ...style,
      }}
      className={className}
    >
      {children}
    </List>
  );
};

export default Grid;
