import { Resolver, Query } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => String)
  hello() {
    return 'hello world';
  }
}
