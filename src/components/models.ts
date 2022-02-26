export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface DataAddress {
  city: string | null,
  street: string | null,
  house:string | null,
  flat:string | null
  'postal_code':string | null,
}
export interface TextArticle {
  title: string
  link: string,
  text: string,
  pic: string
}
