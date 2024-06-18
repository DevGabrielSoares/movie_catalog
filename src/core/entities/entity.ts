import { UniqueEntityID } from './unique-entity-id'

export class Entity<Props> {
  protected props: Props

  get id() {
    return this.id
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
   
  }
}
