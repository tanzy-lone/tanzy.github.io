export interface IOptions {
  value: string
  label: string
}

export interface IOtherOptions {
  type: string
  startPlaceholder: string
  endPlaceholder: string
}

export interface IFormData {
  field: string
  type: string
  placeholder?: string
  label: string
  options?: IOptions[]
  otherOptions?: IOtherOptions
  isHidden?: boolean
}

export interface IFormDataConfig {
  formData: IFormData[]
  labelWidth: string
  itemStyle: any
  title: string
}

export interface ITableData {
  label: string
  prop?: string
  minWidth: string
  slotName?: string
}

export interface IContentConfig {
  tableData: ITableData[]
  title: string
  isShowIndex?: boolean
  isShowSelection?: boolean
  childrenProps?: any
  showFooter?: boolean
}

export interface IModelData {
  type: string
  label: string
  placeholder: string
  field: string
  options?: any[]
  isHidden?: boolean
}

export interface IModelDataConfig {
  formData: IModelData[]
  colLayout?: any
  title: string
  itemStyle: any
}
