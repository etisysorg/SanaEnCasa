import * as matchSorter from 'match-sorter'

export function getMatchSorterWrapper(fieldName: string) {
  // tslint:disable-next-line:no-any
  return (filter: any, rows: any) =>
    // tslint:disable-next-line:no-any
    (matchSorter as any).default(rows, filter.value, { keys: [fieldName] })
}