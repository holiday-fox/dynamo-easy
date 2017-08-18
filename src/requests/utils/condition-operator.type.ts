export type ConditionOperator =
  | '='
  | '<>'
  | '<='
  | '<'
  | '>='
  | '>'
  | 'attribute_not_exists'
  | 'attribute_exists'
  | 'contains'
  | 'NOT contains'
  | 'IN'
  | 'begins_with'
  | 'BETWEEN'