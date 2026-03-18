
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserStat
 * 
 */
export type UserStat = $Result.DefaultSelection<Prisma.$UserStatPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GamePlayer
 * 
 */
export type GamePlayer = $Result.DefaultSelection<Prisma.$GamePlayerPayload>
/**
 * Model GameAction
 * 
 */
export type GameAction = $Result.DefaultSelection<Prisma.$GameActionPayload>
/**
 * Model Lobby
 * 
 */
export type Lobby = $Result.DefaultSelection<Prisma.$LobbyPayload>
/**
 * Model LobbyPlayer
 * 
 */
export type LobbyPlayer = $Result.DefaultSelection<Prisma.$LobbyPlayerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  WAITING: 'WAITING',
  PLAYING: 'PLAYING',
  FINISHED: 'FINISHED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const ActionType: {
  PLAY: 'PLAY',
  DRAW: 'DRAW',
  STACK: 'STACK',
  SWAP: 'SWAP',
  PASS_HANDS: 'PASS_HANDS',
  KNOCKOUT: 'KNOCKOUT',
  CALL_UNO: 'CALL_UNO',
  WIN: 'WIN'
};

export type ActionType = (typeof ActionType)[keyof typeof ActionType]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type ActionType = $Enums.ActionType

export const ActionType: typeof $Enums.ActionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStat`: Exposes CRUD operations for the **UserStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStat.findMany()
    * ```
    */
  get userStat(): Prisma.UserStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gamePlayer`: Exposes CRUD operations for the **GamePlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GamePlayers
    * const gamePlayers = await prisma.gamePlayer.findMany()
    * ```
    */
  get gamePlayer(): Prisma.GamePlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameAction`: Exposes CRUD operations for the **GameAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameActions
    * const gameActions = await prisma.gameAction.findMany()
    * ```
    */
  get gameAction(): Prisma.GameActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lobby`: Exposes CRUD operations for the **Lobby** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lobbies
    * const lobbies = await prisma.lobby.findMany()
    * ```
    */
  get lobby(): Prisma.LobbyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lobbyPlayer`: Exposes CRUD operations for the **LobbyPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LobbyPlayers
    * const lobbyPlayers = await prisma.lobbyPlayer.findMany()
    * ```
    */
  get lobbyPlayer(): Prisma.LobbyPlayerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserStat: 'UserStat',
    Game: 'Game',
    GamePlayer: 'GamePlayer',
    GameAction: 'GameAction',
    Lobby: 'Lobby',
    LobbyPlayer: 'LobbyPlayer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userStat" | "game" | "gamePlayer" | "gameAction" | "lobby" | "lobbyPlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserStat: {
        payload: Prisma.$UserStatPayload<ExtArgs>
        fields: Prisma.UserStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>
          }
          findFirst: {
            args: Prisma.UserStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>
          }
          findMany: {
            args: Prisma.UserStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>[]
          }
          create: {
            args: Prisma.UserStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>
          }
          createMany: {
            args: Prisma.UserStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>[]
          }
          delete: {
            args: Prisma.UserStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>
          }
          update: {
            args: Prisma.UserStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>
          }
          deleteMany: {
            args: Prisma.UserStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>[]
          }
          upsert: {
            args: Prisma.UserStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatPayload>
          }
          aggregate: {
            args: Prisma.UserStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStat>
          }
          groupBy: {
            args: Prisma.UserStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GamePlayer: {
        payload: Prisma.$GamePlayerPayload<ExtArgs>
        fields: Prisma.GamePlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamePlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamePlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          findFirst: {
            args: Prisma.GamePlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamePlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          findMany: {
            args: Prisma.GamePlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>[]
          }
          create: {
            args: Prisma.GamePlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          createMany: {
            args: Prisma.GamePlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamePlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>[]
          }
          delete: {
            args: Prisma.GamePlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          update: {
            args: Prisma.GamePlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          deleteMany: {
            args: Prisma.GamePlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamePlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamePlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>[]
          }
          upsert: {
            args: Prisma.GamePlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePlayerPayload>
          }
          aggregate: {
            args: Prisma.GamePlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGamePlayer>
          }
          groupBy: {
            args: Prisma.GamePlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamePlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamePlayerCountArgs<ExtArgs>
            result: $Utils.Optional<GamePlayerCountAggregateOutputType> | number
          }
        }
      }
      GameAction: {
        payload: Prisma.$GameActionPayload<ExtArgs>
        fields: Prisma.GameActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>
          }
          findFirst: {
            args: Prisma.GameActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>
          }
          findMany: {
            args: Prisma.GameActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>[]
          }
          create: {
            args: Prisma.GameActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>
          }
          createMany: {
            args: Prisma.GameActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>[]
          }
          delete: {
            args: Prisma.GameActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>
          }
          update: {
            args: Prisma.GameActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>
          }
          deleteMany: {
            args: Prisma.GameActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>[]
          }
          upsert: {
            args: Prisma.GameActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameActionPayload>
          }
          aggregate: {
            args: Prisma.GameActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameAction>
          }
          groupBy: {
            args: Prisma.GameActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameActionCountArgs<ExtArgs>
            result: $Utils.Optional<GameActionCountAggregateOutputType> | number
          }
        }
      }
      Lobby: {
        payload: Prisma.$LobbyPayload<ExtArgs>
        fields: Prisma.LobbyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LobbyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LobbyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          findFirst: {
            args: Prisma.LobbyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LobbyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          findMany: {
            args: Prisma.LobbyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>[]
          }
          create: {
            args: Prisma.LobbyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          createMany: {
            args: Prisma.LobbyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LobbyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>[]
          }
          delete: {
            args: Prisma.LobbyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          update: {
            args: Prisma.LobbyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          deleteMany: {
            args: Prisma.LobbyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LobbyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LobbyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>[]
          }
          upsert: {
            args: Prisma.LobbyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          aggregate: {
            args: Prisma.LobbyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLobby>
          }
          groupBy: {
            args: Prisma.LobbyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LobbyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LobbyCountArgs<ExtArgs>
            result: $Utils.Optional<LobbyCountAggregateOutputType> | number
          }
        }
      }
      LobbyPlayer: {
        payload: Prisma.$LobbyPlayerPayload<ExtArgs>
        fields: Prisma.LobbyPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LobbyPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LobbyPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>
          }
          findFirst: {
            args: Prisma.LobbyPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LobbyPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>
          }
          findMany: {
            args: Prisma.LobbyPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>[]
          }
          create: {
            args: Prisma.LobbyPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>
          }
          createMany: {
            args: Prisma.LobbyPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LobbyPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>[]
          }
          delete: {
            args: Prisma.LobbyPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>
          }
          update: {
            args: Prisma.LobbyPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>
          }
          deleteMany: {
            args: Prisma.LobbyPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LobbyPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LobbyPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>[]
          }
          upsert: {
            args: Prisma.LobbyPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPlayerPayload>
          }
          aggregate: {
            args: Prisma.LobbyPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLobbyPlayer>
          }
          groupBy: {
            args: Prisma.LobbyPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LobbyPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LobbyPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<LobbyPlayerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userStat?: UserStatOmit
    game?: GameOmit
    gamePlayer?: GamePlayerOmit
    gameAction?: GameActionOmit
    lobby?: LobbyOmit
    lobbyPlayer?: LobbyPlayerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    games: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | UserCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlayerWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    players: number
    actions: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | GameCountOutputTypeCountPlayersArgs
    actions?: boolean | GameCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlayerWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameActionWhereInput
  }


  /**
   * Count Type LobbyCountOutputType
   */

  export type LobbyCountOutputType = {
    players: number
  }

  export type LobbyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | LobbyCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * LobbyCountOutputType without action
   */
  export type LobbyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyCountOutputType
     */
    select?: LobbyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LobbyCountOutputType without action
   */
  export type LobbyCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyPlayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isGuest: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isGuest: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isGuest: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isGuest?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isGuest?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isGuest?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    password: string | null
    isGuest: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    games?: boolean | User$gamesArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isGuest" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | User$gamesArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      games: Prisma.$GamePlayerPayload<ExtArgs>[]
      stats: Prisma.$UserStatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      password: string | null
      isGuest: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends User$statsArgs<ExtArgs> = {}>(args?: Subset<T, User$statsArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isGuest: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    where?: GamePlayerWhereInput
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    cursor?: GamePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * User.stats
   */
  export type User$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    where?: UserStatWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserStat
   */

  export type AggregateUserStat = {
    _count: UserStatCountAggregateOutputType | null
    _avg: UserStatAvgAggregateOutputType | null
    _sum: UserStatSumAggregateOutputType | null
    _min: UserStatMinAggregateOutputType | null
    _max: UserStatMaxAggregateOutputType | null
  }

  export type UserStatAvgAggregateOutputType = {
    id: number | null
    gamesPlayed: number | null
    gamesWon: number | null
    totalKnockouts: number | null
  }

  export type UserStatSumAggregateOutputType = {
    id: number | null
    gamesPlayed: number | null
    gamesWon: number | null
    totalKnockouts: number | null
  }

  export type UserStatMinAggregateOutputType = {
    id: number | null
    userId: string | null
    gamesPlayed: number | null
    gamesWon: number | null
    totalKnockouts: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    gamesPlayed: number | null
    gamesWon: number | null
    totalKnockouts: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatCountAggregateOutputType = {
    id: number
    userId: number
    gamesPlayed: number
    gamesWon: number
    totalKnockouts: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStatAvgAggregateInputType = {
    id?: true
    gamesPlayed?: true
    gamesWon?: true
    totalKnockouts?: true
  }

  export type UserStatSumAggregateInputType = {
    id?: true
    gamesPlayed?: true
    gamesWon?: true
    totalKnockouts?: true
  }

  export type UserStatMinAggregateInputType = {
    id?: true
    userId?: true
    gamesPlayed?: true
    gamesWon?: true
    totalKnockouts?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatMaxAggregateInputType = {
    id?: true
    userId?: true
    gamesPlayed?: true
    gamesWon?: true
    totalKnockouts?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatCountAggregateInputType = {
    id?: true
    userId?: true
    gamesPlayed?: true
    gamesWon?: true
    totalKnockouts?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStat to aggregate.
     */
    where?: UserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatOrderByWithRelationInput | UserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatMaxAggregateInputType
  }

  export type GetUserStatAggregateType<T extends UserStatAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStat[P]>
      : GetScalarType<T[P], AggregateUserStat[P]>
  }




  export type UserStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatWhereInput
    orderBy?: UserStatOrderByWithAggregationInput | UserStatOrderByWithAggregationInput[]
    by: UserStatScalarFieldEnum[] | UserStatScalarFieldEnum
    having?: UserStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatCountAggregateInputType | true
    _avg?: UserStatAvgAggregateInputType
    _sum?: UserStatSumAggregateInputType
    _min?: UserStatMinAggregateInputType
    _max?: UserStatMaxAggregateInputType
  }

  export type UserStatGroupByOutputType = {
    id: number
    userId: string
    gamesPlayed: number
    gamesWon: number
    totalKnockouts: number
    createdAt: Date
    updatedAt: Date
    _count: UserStatCountAggregateOutputType | null
    _avg: UserStatAvgAggregateOutputType | null
    _sum: UserStatSumAggregateOutputType | null
    _min: UserStatMinAggregateOutputType | null
    _max: UserStatMaxAggregateOutputType | null
  }

  type GetUserStatGroupByPayload<T extends UserStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatGroupByOutputType[P]>
        }
      >
    >


  export type UserStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalKnockouts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStat"]>

  export type UserStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalKnockouts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStat"]>

  export type UserStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalKnockouts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStat"]>

  export type UserStatSelectScalar = {
    id?: boolean
    userId?: boolean
    gamesPlayed?: boolean
    gamesWon?: boolean
    totalKnockouts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gamesPlayed" | "gamesWon" | "totalKnockouts" | "createdAt" | "updatedAt", ExtArgs["result"]["userStat"]>
  export type UserStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      gamesPlayed: number
      gamesWon: number
      totalKnockouts: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStat"]>
    composites: {}
  }

  type UserStatGetPayload<S extends boolean | null | undefined | UserStatDefaultArgs> = $Result.GetResult<Prisma.$UserStatPayload, S>

  type UserStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatCountAggregateInputType | true
    }

  export interface UserStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStat'], meta: { name: 'UserStat' } }
    /**
     * Find zero or one UserStat that matches the filter.
     * @param {UserStatFindUniqueArgs} args - Arguments to find a UserStat
     * @example
     * // Get one UserStat
     * const userStat = await prisma.userStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatFindUniqueArgs>(args: SelectSubset<T, UserStatFindUniqueArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatFindUniqueOrThrowArgs} args - Arguments to find a UserStat
     * @example
     * // Get one UserStat
     * const userStat = await prisma.userStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatFindFirstArgs} args - Arguments to find a UserStat
     * @example
     * // Get one UserStat
     * const userStat = await prisma.userStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatFindFirstArgs>(args?: SelectSubset<T, UserStatFindFirstArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatFindFirstOrThrowArgs} args - Arguments to find a UserStat
     * @example
     * // Get one UserStat
     * const userStat = await prisma.userStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStat.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatWithIdOnly = await prisma.userStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatFindManyArgs>(args?: SelectSubset<T, UserStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStat.
     * @param {UserStatCreateArgs} args - Arguments to create a UserStat.
     * @example
     * // Create one UserStat
     * const UserStat = await prisma.userStat.create({
     *   data: {
     *     // ... data to create a UserStat
     *   }
     * })
     * 
     */
    create<T extends UserStatCreateArgs>(args: SelectSubset<T, UserStatCreateArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStat = await prisma.userStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatCreateManyArgs>(args?: SelectSubset<T, UserStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStat = await prisma.userStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatWithIdOnly = await prisma.userStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStat.
     * @param {UserStatDeleteArgs} args - Arguments to delete one UserStat.
     * @example
     * // Delete one UserStat
     * const UserStat = await prisma.userStat.delete({
     *   where: {
     *     // ... filter to delete one UserStat
     *   }
     * })
     * 
     */
    delete<T extends UserStatDeleteArgs>(args: SelectSubset<T, UserStatDeleteArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStat.
     * @param {UserStatUpdateArgs} args - Arguments to update one UserStat.
     * @example
     * // Update one UserStat
     * const userStat = await prisma.userStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatUpdateArgs>(args: SelectSubset<T, UserStatUpdateArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatDeleteManyArgs>(args?: SelectSubset<T, UserStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStat = await prisma.userStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatUpdateManyArgs>(args: SelectSubset<T, UserStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStat = await prisma.userStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `id`
     * const userStatWithIdOnly = await prisma.userStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStat.
     * @param {UserStatUpsertArgs} args - Arguments to update or create a UserStat.
     * @example
     * // Update or create a UserStat
     * const userStat = await prisma.userStat.upsert({
     *   create: {
     *     // ... data to create a UserStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStat we want to update
     *   }
     * })
     */
    upsert<T extends UserStatUpsertArgs>(args: SelectSubset<T, UserStatUpsertArgs<ExtArgs>>): Prisma__UserStatClient<$Result.GetResult<Prisma.$UserStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStat.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatCountArgs>(
      args?: Subset<T, UserStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatAggregateArgs>(args: Subset<T, UserStatAggregateArgs>): Prisma.PrismaPromise<GetUserStatAggregateType<T>>

    /**
     * Group by UserStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatGroupByArgs['orderBy'] }
        : { orderBy?: UserStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStat model
   */
  readonly fields: UserStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStat model
   */
  interface UserStatFieldRefs {
    readonly id: FieldRef<"UserStat", 'Int'>
    readonly userId: FieldRef<"UserStat", 'String'>
    readonly gamesPlayed: FieldRef<"UserStat", 'Int'>
    readonly gamesWon: FieldRef<"UserStat", 'Int'>
    readonly totalKnockouts: FieldRef<"UserStat", 'Int'>
    readonly createdAt: FieldRef<"UserStat", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStat findUnique
   */
  export type UserStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * Filter, which UserStat to fetch.
     */
    where: UserStatWhereUniqueInput
  }

  /**
   * UserStat findUniqueOrThrow
   */
  export type UserStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * Filter, which UserStat to fetch.
     */
    where: UserStatWhereUniqueInput
  }

  /**
   * UserStat findFirst
   */
  export type UserStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * Filter, which UserStat to fetch.
     */
    where?: UserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatOrderByWithRelationInput | UserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatScalarFieldEnum | UserStatScalarFieldEnum[]
  }

  /**
   * UserStat findFirstOrThrow
   */
  export type UserStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * Filter, which UserStat to fetch.
     */
    where?: UserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatOrderByWithRelationInput | UserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatScalarFieldEnum | UserStatScalarFieldEnum[]
  }

  /**
   * UserStat findMany
   */
  export type UserStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatOrderByWithRelationInput | UserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatScalarFieldEnum | UserStatScalarFieldEnum[]
  }

  /**
   * UserStat create
   */
  export type UserStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStat.
     */
    data: XOR<UserStatCreateInput, UserStatUncheckedCreateInput>
  }

  /**
   * UserStat createMany
   */
  export type UserStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatCreateManyInput | UserStatCreateManyInput[]
  }

  /**
   * UserStat createManyAndReturn
   */
  export type UserStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatCreateManyInput | UserStatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStat update
   */
  export type UserStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStat.
     */
    data: XOR<UserStatUpdateInput, UserStatUncheckedUpdateInput>
    /**
     * Choose, which UserStat to update.
     */
    where: UserStatWhereUniqueInput
  }

  /**
   * UserStat updateMany
   */
  export type UserStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatUpdateManyMutationInput, UserStatUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStat updateManyAndReturn
   */
  export type UserStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatUpdateManyMutationInput, UserStatUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStat upsert
   */
  export type UserStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStat to update in case it exists.
     */
    where: UserStatWhereUniqueInput
    /**
     * In case the UserStat found by the `where` argument doesn't exist, create a new UserStat with this data.
     */
    create: XOR<UserStatCreateInput, UserStatUncheckedCreateInput>
    /**
     * In case the UserStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatUpdateInput, UserStatUncheckedUpdateInput>
  }

  /**
   * UserStat delete
   */
  export type UserStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
    /**
     * Filter which UserStat to delete.
     */
    where: UserStatWhereUniqueInput
  }

  /**
   * UserStat deleteMany
   */
  export type UserStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStat without action
   */
  export type UserStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStat
     */
    select?: UserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStat
     */
    omit?: UserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    maxPlayers: number | null
  }

  export type GameSumAggregateOutputType = {
    maxPlayers: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    maxPlayers: number | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    maxPlayers: number | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    status: number
    maxPlayers: number
    createdAt: number
    updatedAt: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    maxPlayers?: true
  }

  export type GameSumAggregateInputType = {
    maxPlayers?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    status?: true
    maxPlayers?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    endedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    status?: true
    maxPlayers?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    endedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    status?: true
    maxPlayers?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    status: $Enums.GameStatus
    maxPlayers: number
    createdAt: Date
    updatedAt: Date
    startedAt: Date | null
    endedAt: Date | null
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    players?: boolean | Game$playersArgs<ExtArgs>
    actions?: boolean | Game$actionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    status?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "maxPlayers" | "createdAt" | "updatedAt" | "startedAt" | "endedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Game$playersArgs<ExtArgs>
    actions?: boolean | Game$actionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      players: Prisma.$GamePlayerPayload<ExtArgs>[]
      actions: Prisma.$GameActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.GameStatus
      maxPlayers: number
      createdAt: Date
      updatedAt: Date
      startedAt: Date | null
      endedAt: Date | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Game$playersArgs<ExtArgs> = {}>(args?: Subset<T, Game$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actions<T extends Game$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly maxPlayers: FieldRef<"Game", 'Int'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
    readonly startedAt: FieldRef<"Game", 'DateTime'>
    readonly endedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.players
   */
  export type Game$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    where?: GamePlayerWhereInput
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    cursor?: GamePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * Game.actions
   */
  export type Game$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    where?: GameActionWhereInput
    orderBy?: GameActionOrderByWithRelationInput | GameActionOrderByWithRelationInput[]
    cursor?: GameActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameActionScalarFieldEnum | GameActionScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GamePlayer
   */

  export type AggregateGamePlayer = {
    _count: GamePlayerCountAggregateOutputType | null
    _avg: GamePlayerAvgAggregateOutputType | null
    _sum: GamePlayerSumAggregateOutputType | null
    _min: GamePlayerMinAggregateOutputType | null
    _max: GamePlayerMaxAggregateOutputType | null
  }

  export type GamePlayerAvgAggregateOutputType = {
    position: number | null
  }

  export type GamePlayerSumAggregateOutputType = {
    position: number | null
  }

  export type GamePlayerMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    userId: string | null
    position: number | null
    cards: string | null
    isKnockedOut: boolean | null
    calledUno: boolean | null
    createdAt: Date | null
  }

  export type GamePlayerMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    userId: string | null
    position: number | null
    cards: string | null
    isKnockedOut: boolean | null
    calledUno: boolean | null
    createdAt: Date | null
  }

  export type GamePlayerCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    position: number
    cards: number
    isKnockedOut: number
    calledUno: number
    createdAt: number
    _all: number
  }


  export type GamePlayerAvgAggregateInputType = {
    position?: true
  }

  export type GamePlayerSumAggregateInputType = {
    position?: true
  }

  export type GamePlayerMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    position?: true
    cards?: true
    isKnockedOut?: true
    calledUno?: true
    createdAt?: true
  }

  export type GamePlayerMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    position?: true
    cards?: true
    isKnockedOut?: true
    calledUno?: true
    createdAt?: true
  }

  export type GamePlayerCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    position?: true
    cards?: true
    isKnockedOut?: true
    calledUno?: true
    createdAt?: true
    _all?: true
  }

  export type GamePlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamePlayer to aggregate.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GamePlayers
    **/
    _count?: true | GamePlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamePlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamePlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamePlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamePlayerMaxAggregateInputType
  }

  export type GetGamePlayerAggregateType<T extends GamePlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateGamePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGamePlayer[P]>
      : GetScalarType<T[P], AggregateGamePlayer[P]>
  }




  export type GamePlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamePlayerWhereInput
    orderBy?: GamePlayerOrderByWithAggregationInput | GamePlayerOrderByWithAggregationInput[]
    by: GamePlayerScalarFieldEnum[] | GamePlayerScalarFieldEnum
    having?: GamePlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamePlayerCountAggregateInputType | true
    _avg?: GamePlayerAvgAggregateInputType
    _sum?: GamePlayerSumAggregateInputType
    _min?: GamePlayerMinAggregateInputType
    _max?: GamePlayerMaxAggregateInputType
  }

  export type GamePlayerGroupByOutputType = {
    id: string
    gameId: string
    userId: string
    position: number
    cards: string
    isKnockedOut: boolean
    calledUno: boolean
    createdAt: Date
    _count: GamePlayerCountAggregateOutputType | null
    _avg: GamePlayerAvgAggregateOutputType | null
    _sum: GamePlayerSumAggregateOutputType | null
    _min: GamePlayerMinAggregateOutputType | null
    _max: GamePlayerMaxAggregateOutputType | null
  }

  type GetGamePlayerGroupByPayload<T extends GamePlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamePlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamePlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamePlayerGroupByOutputType[P]>
            : GetScalarType<T[P], GamePlayerGroupByOutputType[P]>
        }
      >
    >


  export type GamePlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    position?: boolean
    cards?: boolean
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlayer"]>

  export type GamePlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    position?: boolean
    cards?: boolean
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlayer"]>

  export type GamePlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    position?: boolean
    cards?: boolean
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamePlayer"]>

  export type GamePlayerSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    position?: boolean
    cards?: boolean
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: boolean
  }

  export type GamePlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "position" | "cards" | "isKnockedOut" | "calledUno" | "createdAt", ExtArgs["result"]["gamePlayer"]>
  export type GamePlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GamePlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GamePlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GamePlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GamePlayer"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      userId: string
      position: number
      cards: string
      isKnockedOut: boolean
      calledUno: boolean
      createdAt: Date
    }, ExtArgs["result"]["gamePlayer"]>
    composites: {}
  }

  type GamePlayerGetPayload<S extends boolean | null | undefined | GamePlayerDefaultArgs> = $Result.GetResult<Prisma.$GamePlayerPayload, S>

  type GamePlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamePlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamePlayerCountAggregateInputType | true
    }

  export interface GamePlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GamePlayer'], meta: { name: 'GamePlayer' } }
    /**
     * Find zero or one GamePlayer that matches the filter.
     * @param {GamePlayerFindUniqueArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamePlayerFindUniqueArgs>(args: SelectSubset<T, GamePlayerFindUniqueArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GamePlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamePlayerFindUniqueOrThrowArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamePlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, GamePlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamePlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerFindFirstArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamePlayerFindFirstArgs>(args?: SelectSubset<T, GamePlayerFindFirstArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamePlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerFindFirstOrThrowArgs} args - Arguments to find a GamePlayer
     * @example
     * // Get one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamePlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, GamePlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GamePlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GamePlayers
     * const gamePlayers = await prisma.gamePlayer.findMany()
     * 
     * // Get first 10 GamePlayers
     * const gamePlayers = await prisma.gamePlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamePlayerWithIdOnly = await prisma.gamePlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GamePlayerFindManyArgs>(args?: SelectSubset<T, GamePlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GamePlayer.
     * @param {GamePlayerCreateArgs} args - Arguments to create a GamePlayer.
     * @example
     * // Create one GamePlayer
     * const GamePlayer = await prisma.gamePlayer.create({
     *   data: {
     *     // ... data to create a GamePlayer
     *   }
     * })
     * 
     */
    create<T extends GamePlayerCreateArgs>(args: SelectSubset<T, GamePlayerCreateArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GamePlayers.
     * @param {GamePlayerCreateManyArgs} args - Arguments to create many GamePlayers.
     * @example
     * // Create many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamePlayerCreateManyArgs>(args?: SelectSubset<T, GamePlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GamePlayers and returns the data saved in the database.
     * @param {GamePlayerCreateManyAndReturnArgs} args - Arguments to create many GamePlayers.
     * @example
     * // Create many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GamePlayers and only return the `id`
     * const gamePlayerWithIdOnly = await prisma.gamePlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamePlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, GamePlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GamePlayer.
     * @param {GamePlayerDeleteArgs} args - Arguments to delete one GamePlayer.
     * @example
     * // Delete one GamePlayer
     * const GamePlayer = await prisma.gamePlayer.delete({
     *   where: {
     *     // ... filter to delete one GamePlayer
     *   }
     * })
     * 
     */
    delete<T extends GamePlayerDeleteArgs>(args: SelectSubset<T, GamePlayerDeleteArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GamePlayer.
     * @param {GamePlayerUpdateArgs} args - Arguments to update one GamePlayer.
     * @example
     * // Update one GamePlayer
     * const gamePlayer = await prisma.gamePlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamePlayerUpdateArgs>(args: SelectSubset<T, GamePlayerUpdateArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GamePlayers.
     * @param {GamePlayerDeleteManyArgs} args - Arguments to filter GamePlayers to delete.
     * @example
     * // Delete a few GamePlayers
     * const { count } = await prisma.gamePlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamePlayerDeleteManyArgs>(args?: SelectSubset<T, GamePlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamePlayerUpdateManyArgs>(args: SelectSubset<T, GamePlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamePlayers and returns the data updated in the database.
     * @param {GamePlayerUpdateManyAndReturnArgs} args - Arguments to update many GamePlayers.
     * @example
     * // Update many GamePlayers
     * const gamePlayer = await prisma.gamePlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GamePlayers and only return the `id`
     * const gamePlayerWithIdOnly = await prisma.gamePlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GamePlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, GamePlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GamePlayer.
     * @param {GamePlayerUpsertArgs} args - Arguments to update or create a GamePlayer.
     * @example
     * // Update or create a GamePlayer
     * const gamePlayer = await prisma.gamePlayer.upsert({
     *   create: {
     *     // ... data to create a GamePlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GamePlayer we want to update
     *   }
     * })
     */
    upsert<T extends GamePlayerUpsertArgs>(args: SelectSubset<T, GamePlayerUpsertArgs<ExtArgs>>): Prisma__GamePlayerClient<$Result.GetResult<Prisma.$GamePlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GamePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerCountArgs} args - Arguments to filter GamePlayers to count.
     * @example
     * // Count the number of GamePlayers
     * const count = await prisma.gamePlayer.count({
     *   where: {
     *     // ... the filter for the GamePlayers we want to count
     *   }
     * })
    **/
    count<T extends GamePlayerCountArgs>(
      args?: Subset<T, GamePlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamePlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GamePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GamePlayerAggregateArgs>(args: Subset<T, GamePlayerAggregateArgs>): Prisma.PrismaPromise<GetGamePlayerAggregateType<T>>

    /**
     * Group by GamePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamePlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GamePlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamePlayerGroupByArgs['orderBy'] }
        : { orderBy?: GamePlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GamePlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamePlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GamePlayer model
   */
  readonly fields: GamePlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GamePlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamePlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GamePlayer model
   */
  interface GamePlayerFieldRefs {
    readonly id: FieldRef<"GamePlayer", 'String'>
    readonly gameId: FieldRef<"GamePlayer", 'String'>
    readonly userId: FieldRef<"GamePlayer", 'String'>
    readonly position: FieldRef<"GamePlayer", 'Int'>
    readonly cards: FieldRef<"GamePlayer", 'String'>
    readonly isKnockedOut: FieldRef<"GamePlayer", 'Boolean'>
    readonly calledUno: FieldRef<"GamePlayer", 'Boolean'>
    readonly createdAt: FieldRef<"GamePlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GamePlayer findUnique
   */
  export type GamePlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer findUniqueOrThrow
   */
  export type GamePlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer findFirst
   */
  export type GamePlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamePlayers.
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamePlayers.
     */
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * GamePlayer findFirstOrThrow
   */
  export type GamePlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayer to fetch.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamePlayers.
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamePlayers.
     */
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * GamePlayer findMany
   */
  export type GamePlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which GamePlayers to fetch.
     */
    where?: GamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamePlayers to fetch.
     */
    orderBy?: GamePlayerOrderByWithRelationInput | GamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GamePlayers.
     */
    cursor?: GamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamePlayers.
     */
    skip?: number
    distinct?: GamePlayerScalarFieldEnum | GamePlayerScalarFieldEnum[]
  }

  /**
   * GamePlayer create
   */
  export type GamePlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a GamePlayer.
     */
    data: XOR<GamePlayerCreateInput, GamePlayerUncheckedCreateInput>
  }

  /**
   * GamePlayer createMany
   */
  export type GamePlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GamePlayers.
     */
    data: GamePlayerCreateManyInput | GamePlayerCreateManyInput[]
  }

  /**
   * GamePlayer createManyAndReturn
   */
  export type GamePlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * The data used to create many GamePlayers.
     */
    data: GamePlayerCreateManyInput | GamePlayerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GamePlayer update
   */
  export type GamePlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a GamePlayer.
     */
    data: XOR<GamePlayerUpdateInput, GamePlayerUncheckedUpdateInput>
    /**
     * Choose, which GamePlayer to update.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer updateMany
   */
  export type GamePlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GamePlayers.
     */
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyInput>
    /**
     * Filter which GamePlayers to update
     */
    where?: GamePlayerWhereInput
    /**
     * Limit how many GamePlayers to update.
     */
    limit?: number
  }

  /**
   * GamePlayer updateManyAndReturn
   */
  export type GamePlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * The data used to update GamePlayers.
     */
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyInput>
    /**
     * Filter which GamePlayers to update
     */
    where?: GamePlayerWhereInput
    /**
     * Limit how many GamePlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GamePlayer upsert
   */
  export type GamePlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the GamePlayer to update in case it exists.
     */
    where: GamePlayerWhereUniqueInput
    /**
     * In case the GamePlayer found by the `where` argument doesn't exist, create a new GamePlayer with this data.
     */
    create: XOR<GamePlayerCreateInput, GamePlayerUncheckedCreateInput>
    /**
     * In case the GamePlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamePlayerUpdateInput, GamePlayerUncheckedUpdateInput>
  }

  /**
   * GamePlayer delete
   */
  export type GamePlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
    /**
     * Filter which GamePlayer to delete.
     */
    where: GamePlayerWhereUniqueInput
  }

  /**
   * GamePlayer deleteMany
   */
  export type GamePlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamePlayers to delete
     */
    where?: GamePlayerWhereInput
    /**
     * Limit how many GamePlayers to delete.
     */
    limit?: number
  }

  /**
   * GamePlayer without action
   */
  export type GamePlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamePlayer
     */
    select?: GamePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamePlayer
     */
    omit?: GamePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamePlayerInclude<ExtArgs> | null
  }


  /**
   * Model GameAction
   */

  export type AggregateGameAction = {
    _count: GameActionCountAggregateOutputType | null
    _avg: GameActionAvgAggregateOutputType | null
    _sum: GameActionSumAggregateOutputType | null
    _min: GameActionMinAggregateOutputType | null
    _max: GameActionMaxAggregateOutputType | null
  }

  export type GameActionAvgAggregateOutputType = {
    cardsDrawn: number | null
  }

  export type GameActionSumAggregateOutputType = {
    cardsDrawn: number | null
  }

  export type GameActionMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    playerId: string | null
    type: $Enums.ActionType | null
    cardPlayed: string | null
    cardsDrawn: number | null
    targetId: string | null
    color: string | null
    createdAt: Date | null
  }

  export type GameActionMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    playerId: string | null
    type: $Enums.ActionType | null
    cardPlayed: string | null
    cardsDrawn: number | null
    targetId: string | null
    color: string | null
    createdAt: Date | null
  }

  export type GameActionCountAggregateOutputType = {
    id: number
    gameId: number
    playerId: number
    type: number
    cardPlayed: number
    cardsDrawn: number
    targetId: number
    color: number
    createdAt: number
    _all: number
  }


  export type GameActionAvgAggregateInputType = {
    cardsDrawn?: true
  }

  export type GameActionSumAggregateInputType = {
    cardsDrawn?: true
  }

  export type GameActionMinAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    type?: true
    cardPlayed?: true
    cardsDrawn?: true
    targetId?: true
    color?: true
    createdAt?: true
  }

  export type GameActionMaxAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    type?: true
    cardPlayed?: true
    cardsDrawn?: true
    targetId?: true
    color?: true
    createdAt?: true
  }

  export type GameActionCountAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    type?: true
    cardPlayed?: true
    cardsDrawn?: true
    targetId?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type GameActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameAction to aggregate.
     */
    where?: GameActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameActions to fetch.
     */
    orderBy?: GameActionOrderByWithRelationInput | GameActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameActions
    **/
    _count?: true | GameActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameActionMaxAggregateInputType
  }

  export type GetGameActionAggregateType<T extends GameActionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameAction[P]>
      : GetScalarType<T[P], AggregateGameAction[P]>
  }




  export type GameActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameActionWhereInput
    orderBy?: GameActionOrderByWithAggregationInput | GameActionOrderByWithAggregationInput[]
    by: GameActionScalarFieldEnum[] | GameActionScalarFieldEnum
    having?: GameActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameActionCountAggregateInputType | true
    _avg?: GameActionAvgAggregateInputType
    _sum?: GameActionSumAggregateInputType
    _min?: GameActionMinAggregateInputType
    _max?: GameActionMaxAggregateInputType
  }

  export type GameActionGroupByOutputType = {
    id: string
    gameId: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed: string | null
    cardsDrawn: number
    targetId: string | null
    color: string | null
    createdAt: Date
    _count: GameActionCountAggregateOutputType | null
    _avg: GameActionAvgAggregateOutputType | null
    _sum: GameActionSumAggregateOutputType | null
    _min: GameActionMinAggregateOutputType | null
    _max: GameActionMaxAggregateOutputType | null
  }

  type GetGameActionGroupByPayload<T extends GameActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameActionGroupByOutputType[P]>
            : GetScalarType<T[P], GameActionGroupByOutputType[P]>
        }
      >
    >


  export type GameActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    type?: boolean
    cardPlayed?: boolean
    cardsDrawn?: boolean
    targetId?: boolean
    color?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAction"]>

  export type GameActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    type?: boolean
    cardPlayed?: boolean
    cardsDrawn?: boolean
    targetId?: boolean
    color?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAction"]>

  export type GameActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    type?: boolean
    cardPlayed?: boolean
    cardsDrawn?: boolean
    targetId?: boolean
    color?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAction"]>

  export type GameActionSelectScalar = {
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    type?: boolean
    cardPlayed?: boolean
    cardsDrawn?: boolean
    targetId?: boolean
    color?: boolean
    createdAt?: boolean
  }

  export type GameActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "playerId" | "type" | "cardPlayed" | "cardsDrawn" | "targetId" | "color" | "createdAt", ExtArgs["result"]["gameAction"]>
  export type GameActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type GameActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $GameActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameAction"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      playerId: string
      type: $Enums.ActionType
      cardPlayed: string | null
      cardsDrawn: number
      targetId: string | null
      color: string | null
      createdAt: Date
    }, ExtArgs["result"]["gameAction"]>
    composites: {}
  }

  type GameActionGetPayload<S extends boolean | null | undefined | GameActionDefaultArgs> = $Result.GetResult<Prisma.$GameActionPayload, S>

  type GameActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameActionCountAggregateInputType | true
    }

  export interface GameActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameAction'], meta: { name: 'GameAction' } }
    /**
     * Find zero or one GameAction that matches the filter.
     * @param {GameActionFindUniqueArgs} args - Arguments to find a GameAction
     * @example
     * // Get one GameAction
     * const gameAction = await prisma.gameAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameActionFindUniqueArgs>(args: SelectSubset<T, GameActionFindUniqueArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameActionFindUniqueOrThrowArgs} args - Arguments to find a GameAction
     * @example
     * // Get one GameAction
     * const gameAction = await prisma.gameAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameActionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionFindFirstArgs} args - Arguments to find a GameAction
     * @example
     * // Get one GameAction
     * const gameAction = await prisma.gameAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameActionFindFirstArgs>(args?: SelectSubset<T, GameActionFindFirstArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionFindFirstOrThrowArgs} args - Arguments to find a GameAction
     * @example
     * // Get one GameAction
     * const gameAction = await prisma.gameAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameActionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameActions
     * const gameActions = await prisma.gameAction.findMany()
     * 
     * // Get first 10 GameActions
     * const gameActions = await prisma.gameAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameActionWithIdOnly = await prisma.gameAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameActionFindManyArgs>(args?: SelectSubset<T, GameActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameAction.
     * @param {GameActionCreateArgs} args - Arguments to create a GameAction.
     * @example
     * // Create one GameAction
     * const GameAction = await prisma.gameAction.create({
     *   data: {
     *     // ... data to create a GameAction
     *   }
     * })
     * 
     */
    create<T extends GameActionCreateArgs>(args: SelectSubset<T, GameActionCreateArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameActions.
     * @param {GameActionCreateManyArgs} args - Arguments to create many GameActions.
     * @example
     * // Create many GameActions
     * const gameAction = await prisma.gameAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameActionCreateManyArgs>(args?: SelectSubset<T, GameActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameActions and returns the data saved in the database.
     * @param {GameActionCreateManyAndReturnArgs} args - Arguments to create many GameActions.
     * @example
     * // Create many GameActions
     * const gameAction = await prisma.gameAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameActions and only return the `id`
     * const gameActionWithIdOnly = await prisma.gameAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameActionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameAction.
     * @param {GameActionDeleteArgs} args - Arguments to delete one GameAction.
     * @example
     * // Delete one GameAction
     * const GameAction = await prisma.gameAction.delete({
     *   where: {
     *     // ... filter to delete one GameAction
     *   }
     * })
     * 
     */
    delete<T extends GameActionDeleteArgs>(args: SelectSubset<T, GameActionDeleteArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameAction.
     * @param {GameActionUpdateArgs} args - Arguments to update one GameAction.
     * @example
     * // Update one GameAction
     * const gameAction = await prisma.gameAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameActionUpdateArgs>(args: SelectSubset<T, GameActionUpdateArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameActions.
     * @param {GameActionDeleteManyArgs} args - Arguments to filter GameActions to delete.
     * @example
     * // Delete a few GameActions
     * const { count } = await prisma.gameAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameActionDeleteManyArgs>(args?: SelectSubset<T, GameActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameActions
     * const gameAction = await prisma.gameAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameActionUpdateManyArgs>(args: SelectSubset<T, GameActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameActions and returns the data updated in the database.
     * @param {GameActionUpdateManyAndReturnArgs} args - Arguments to update many GameActions.
     * @example
     * // Update many GameActions
     * const gameAction = await prisma.gameAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameActions and only return the `id`
     * const gameActionWithIdOnly = await prisma.gameAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameActionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameAction.
     * @param {GameActionUpsertArgs} args - Arguments to update or create a GameAction.
     * @example
     * // Update or create a GameAction
     * const gameAction = await prisma.gameAction.upsert({
     *   create: {
     *     // ... data to create a GameAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameAction we want to update
     *   }
     * })
     */
    upsert<T extends GameActionUpsertArgs>(args: SelectSubset<T, GameActionUpsertArgs<ExtArgs>>): Prisma__GameActionClient<$Result.GetResult<Prisma.$GameActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionCountArgs} args - Arguments to filter GameActions to count.
     * @example
     * // Count the number of GameActions
     * const count = await prisma.gameAction.count({
     *   where: {
     *     // ... the filter for the GameActions we want to count
     *   }
     * })
    **/
    count<T extends GameActionCountArgs>(
      args?: Subset<T, GameActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameActionAggregateArgs>(args: Subset<T, GameActionAggregateArgs>): Prisma.PrismaPromise<GetGameActionAggregateType<T>>

    /**
     * Group by GameAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameActionGroupByArgs['orderBy'] }
        : { orderBy?: GameActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameAction model
   */
  readonly fields: GameActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameAction model
   */
  interface GameActionFieldRefs {
    readonly id: FieldRef<"GameAction", 'String'>
    readonly gameId: FieldRef<"GameAction", 'String'>
    readonly playerId: FieldRef<"GameAction", 'String'>
    readonly type: FieldRef<"GameAction", 'ActionType'>
    readonly cardPlayed: FieldRef<"GameAction", 'String'>
    readonly cardsDrawn: FieldRef<"GameAction", 'Int'>
    readonly targetId: FieldRef<"GameAction", 'String'>
    readonly color: FieldRef<"GameAction", 'String'>
    readonly createdAt: FieldRef<"GameAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameAction findUnique
   */
  export type GameActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * Filter, which GameAction to fetch.
     */
    where: GameActionWhereUniqueInput
  }

  /**
   * GameAction findUniqueOrThrow
   */
  export type GameActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * Filter, which GameAction to fetch.
     */
    where: GameActionWhereUniqueInput
  }

  /**
   * GameAction findFirst
   */
  export type GameActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * Filter, which GameAction to fetch.
     */
    where?: GameActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameActions to fetch.
     */
    orderBy?: GameActionOrderByWithRelationInput | GameActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameActions.
     */
    cursor?: GameActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameActions.
     */
    distinct?: GameActionScalarFieldEnum | GameActionScalarFieldEnum[]
  }

  /**
   * GameAction findFirstOrThrow
   */
  export type GameActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * Filter, which GameAction to fetch.
     */
    where?: GameActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameActions to fetch.
     */
    orderBy?: GameActionOrderByWithRelationInput | GameActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameActions.
     */
    cursor?: GameActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameActions.
     */
    distinct?: GameActionScalarFieldEnum | GameActionScalarFieldEnum[]
  }

  /**
   * GameAction findMany
   */
  export type GameActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * Filter, which GameActions to fetch.
     */
    where?: GameActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameActions to fetch.
     */
    orderBy?: GameActionOrderByWithRelationInput | GameActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameActions.
     */
    cursor?: GameActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameActions.
     */
    skip?: number
    distinct?: GameActionScalarFieldEnum | GameActionScalarFieldEnum[]
  }

  /**
   * GameAction create
   */
  export type GameActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameAction.
     */
    data: XOR<GameActionCreateInput, GameActionUncheckedCreateInput>
  }

  /**
   * GameAction createMany
   */
  export type GameActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameActions.
     */
    data: GameActionCreateManyInput | GameActionCreateManyInput[]
  }

  /**
   * GameAction createManyAndReturn
   */
  export type GameActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * The data used to create many GameActions.
     */
    data: GameActionCreateManyInput | GameActionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameAction update
   */
  export type GameActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameAction.
     */
    data: XOR<GameActionUpdateInput, GameActionUncheckedUpdateInput>
    /**
     * Choose, which GameAction to update.
     */
    where: GameActionWhereUniqueInput
  }

  /**
   * GameAction updateMany
   */
  export type GameActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameActions.
     */
    data: XOR<GameActionUpdateManyMutationInput, GameActionUncheckedUpdateManyInput>
    /**
     * Filter which GameActions to update
     */
    where?: GameActionWhereInput
    /**
     * Limit how many GameActions to update.
     */
    limit?: number
  }

  /**
   * GameAction updateManyAndReturn
   */
  export type GameActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * The data used to update GameActions.
     */
    data: XOR<GameActionUpdateManyMutationInput, GameActionUncheckedUpdateManyInput>
    /**
     * Filter which GameActions to update
     */
    where?: GameActionWhereInput
    /**
     * Limit how many GameActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameAction upsert
   */
  export type GameActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameAction to update in case it exists.
     */
    where: GameActionWhereUniqueInput
    /**
     * In case the GameAction found by the `where` argument doesn't exist, create a new GameAction with this data.
     */
    create: XOR<GameActionCreateInput, GameActionUncheckedCreateInput>
    /**
     * In case the GameAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameActionUpdateInput, GameActionUncheckedUpdateInput>
  }

  /**
   * GameAction delete
   */
  export type GameActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
    /**
     * Filter which GameAction to delete.
     */
    where: GameActionWhereUniqueInput
  }

  /**
   * GameAction deleteMany
   */
  export type GameActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameActions to delete
     */
    where?: GameActionWhereInput
    /**
     * Limit how many GameActions to delete.
     */
    limit?: number
  }

  /**
   * GameAction without action
   */
  export type GameActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAction
     */
    select?: GameActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAction
     */
    omit?: GameActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameActionInclude<ExtArgs> | null
  }


  /**
   * Model Lobby
   */

  export type AggregateLobby = {
    _count: LobbyCountAggregateOutputType | null
    _min: LobbyMinAggregateOutputType | null
    _max: LobbyMaxAggregateOutputType | null
  }

  export type LobbyMinAggregateOutputType = {
    id: string | null
    code: string | null
    createdBy: string | null
    status: $Enums.GameStatus | null
    createdAt: Date | null
  }

  export type LobbyMaxAggregateOutputType = {
    id: string | null
    code: string | null
    createdBy: string | null
    status: $Enums.GameStatus | null
    createdAt: Date | null
  }

  export type LobbyCountAggregateOutputType = {
    id: number
    code: number
    createdBy: number
    status: number
    createdAt: number
    _all: number
  }


  export type LobbyMinAggregateInputType = {
    id?: true
    code?: true
    createdBy?: true
    status?: true
    createdAt?: true
  }

  export type LobbyMaxAggregateInputType = {
    id?: true
    code?: true
    createdBy?: true
    status?: true
    createdAt?: true
  }

  export type LobbyCountAggregateInputType = {
    id?: true
    code?: true
    createdBy?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LobbyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lobby to aggregate.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lobbies
    **/
    _count?: true | LobbyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LobbyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LobbyMaxAggregateInputType
  }

  export type GetLobbyAggregateType<T extends LobbyAggregateArgs> = {
        [P in keyof T & keyof AggregateLobby]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobby[P]>
      : GetScalarType<T[P], AggregateLobby[P]>
  }




  export type LobbyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyWhereInput
    orderBy?: LobbyOrderByWithAggregationInput | LobbyOrderByWithAggregationInput[]
    by: LobbyScalarFieldEnum[] | LobbyScalarFieldEnum
    having?: LobbyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LobbyCountAggregateInputType | true
    _min?: LobbyMinAggregateInputType
    _max?: LobbyMaxAggregateInputType
  }

  export type LobbyGroupByOutputType = {
    id: string
    code: string
    createdBy: string
    status: $Enums.GameStatus
    createdAt: Date
    _count: LobbyCountAggregateOutputType | null
    _min: LobbyMinAggregateOutputType | null
    _max: LobbyMaxAggregateOutputType | null
  }

  type GetLobbyGroupByPayload<T extends LobbyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LobbyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LobbyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LobbyGroupByOutputType[P]>
            : GetScalarType<T[P], LobbyGroupByOutputType[P]>
        }
      >
    >


  export type LobbySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
    players?: boolean | Lobby$playersArgs<ExtArgs>
    _count?: boolean | LobbyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobby"]>

  export type LobbySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lobby"]>

  export type LobbySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lobby"]>

  export type LobbySelectScalar = {
    id?: boolean
    code?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LobbyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "createdBy" | "status" | "createdAt", ExtArgs["result"]["lobby"]>
  export type LobbyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Lobby$playersArgs<ExtArgs>
    _count?: boolean | LobbyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LobbyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LobbyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LobbyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lobby"
    objects: {
      players: Prisma.$LobbyPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      createdBy: string
      status: $Enums.GameStatus
      createdAt: Date
    }, ExtArgs["result"]["lobby"]>
    composites: {}
  }

  type LobbyGetPayload<S extends boolean | null | undefined | LobbyDefaultArgs> = $Result.GetResult<Prisma.$LobbyPayload, S>

  type LobbyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LobbyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LobbyCountAggregateInputType | true
    }

  export interface LobbyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lobby'], meta: { name: 'Lobby' } }
    /**
     * Find zero or one Lobby that matches the filter.
     * @param {LobbyFindUniqueArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LobbyFindUniqueArgs>(args: SelectSubset<T, LobbyFindUniqueArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lobby that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LobbyFindUniqueOrThrowArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LobbyFindUniqueOrThrowArgs>(args: SelectSubset<T, LobbyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lobby that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyFindFirstArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LobbyFindFirstArgs>(args?: SelectSubset<T, LobbyFindFirstArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lobby that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyFindFirstOrThrowArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LobbyFindFirstOrThrowArgs>(args?: SelectSubset<T, LobbyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lobbies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lobbies
     * const lobbies = await prisma.lobby.findMany()
     * 
     * // Get first 10 Lobbies
     * const lobbies = await prisma.lobby.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lobbyWithIdOnly = await prisma.lobby.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LobbyFindManyArgs>(args?: SelectSubset<T, LobbyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lobby.
     * @param {LobbyCreateArgs} args - Arguments to create a Lobby.
     * @example
     * // Create one Lobby
     * const Lobby = await prisma.lobby.create({
     *   data: {
     *     // ... data to create a Lobby
     *   }
     * })
     * 
     */
    create<T extends LobbyCreateArgs>(args: SelectSubset<T, LobbyCreateArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lobbies.
     * @param {LobbyCreateManyArgs} args - Arguments to create many Lobbies.
     * @example
     * // Create many Lobbies
     * const lobby = await prisma.lobby.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LobbyCreateManyArgs>(args?: SelectSubset<T, LobbyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lobbies and returns the data saved in the database.
     * @param {LobbyCreateManyAndReturnArgs} args - Arguments to create many Lobbies.
     * @example
     * // Create many Lobbies
     * const lobby = await prisma.lobby.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lobbies and only return the `id`
     * const lobbyWithIdOnly = await prisma.lobby.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LobbyCreateManyAndReturnArgs>(args?: SelectSubset<T, LobbyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lobby.
     * @param {LobbyDeleteArgs} args - Arguments to delete one Lobby.
     * @example
     * // Delete one Lobby
     * const Lobby = await prisma.lobby.delete({
     *   where: {
     *     // ... filter to delete one Lobby
     *   }
     * })
     * 
     */
    delete<T extends LobbyDeleteArgs>(args: SelectSubset<T, LobbyDeleteArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lobby.
     * @param {LobbyUpdateArgs} args - Arguments to update one Lobby.
     * @example
     * // Update one Lobby
     * const lobby = await prisma.lobby.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LobbyUpdateArgs>(args: SelectSubset<T, LobbyUpdateArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lobbies.
     * @param {LobbyDeleteManyArgs} args - Arguments to filter Lobbies to delete.
     * @example
     * // Delete a few Lobbies
     * const { count } = await prisma.lobby.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LobbyDeleteManyArgs>(args?: SelectSubset<T, LobbyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lobbies
     * const lobby = await prisma.lobby.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LobbyUpdateManyArgs>(args: SelectSubset<T, LobbyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lobbies and returns the data updated in the database.
     * @param {LobbyUpdateManyAndReturnArgs} args - Arguments to update many Lobbies.
     * @example
     * // Update many Lobbies
     * const lobby = await prisma.lobby.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lobbies and only return the `id`
     * const lobbyWithIdOnly = await prisma.lobby.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LobbyUpdateManyAndReturnArgs>(args: SelectSubset<T, LobbyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lobby.
     * @param {LobbyUpsertArgs} args - Arguments to update or create a Lobby.
     * @example
     * // Update or create a Lobby
     * const lobby = await prisma.lobby.upsert({
     *   create: {
     *     // ... data to create a Lobby
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lobby we want to update
     *   }
     * })
     */
    upsert<T extends LobbyUpsertArgs>(args: SelectSubset<T, LobbyUpsertArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyCountArgs} args - Arguments to filter Lobbies to count.
     * @example
     * // Count the number of Lobbies
     * const count = await prisma.lobby.count({
     *   where: {
     *     // ... the filter for the Lobbies we want to count
     *   }
     * })
    **/
    count<T extends LobbyCountArgs>(
      args?: Subset<T, LobbyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LobbyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lobby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LobbyAggregateArgs>(args: Subset<T, LobbyAggregateArgs>): Prisma.PrismaPromise<GetLobbyAggregateType<T>>

    /**
     * Group by Lobby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LobbyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LobbyGroupByArgs['orderBy'] }
        : { orderBy?: LobbyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LobbyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobbyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lobby model
   */
  readonly fields: LobbyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lobby.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LobbyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Lobby$playersArgs<ExtArgs> = {}>(args?: Subset<T, Lobby$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lobby model
   */
  interface LobbyFieldRefs {
    readonly id: FieldRef<"Lobby", 'String'>
    readonly code: FieldRef<"Lobby", 'String'>
    readonly createdBy: FieldRef<"Lobby", 'String'>
    readonly status: FieldRef<"Lobby", 'GameStatus'>
    readonly createdAt: FieldRef<"Lobby", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lobby findUnique
   */
  export type LobbyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby findUniqueOrThrow
   */
  export type LobbyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby findFirst
   */
  export type LobbyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lobbies.
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lobbies.
     */
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * Lobby findFirstOrThrow
   */
  export type LobbyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lobbies.
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lobbies.
     */
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * Lobby findMany
   */
  export type LobbyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobbies to fetch.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lobbies.
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * Lobby create
   */
  export type LobbyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * The data needed to create a Lobby.
     */
    data: XOR<LobbyCreateInput, LobbyUncheckedCreateInput>
  }

  /**
   * Lobby createMany
   */
  export type LobbyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lobbies.
     */
    data: LobbyCreateManyInput | LobbyCreateManyInput[]
  }

  /**
   * Lobby createManyAndReturn
   */
  export type LobbyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * The data used to create many Lobbies.
     */
    data: LobbyCreateManyInput | LobbyCreateManyInput[]
  }

  /**
   * Lobby update
   */
  export type LobbyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * The data needed to update a Lobby.
     */
    data: XOR<LobbyUpdateInput, LobbyUncheckedUpdateInput>
    /**
     * Choose, which Lobby to update.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby updateMany
   */
  export type LobbyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lobbies.
     */
    data: XOR<LobbyUpdateManyMutationInput, LobbyUncheckedUpdateManyInput>
    /**
     * Filter which Lobbies to update
     */
    where?: LobbyWhereInput
    /**
     * Limit how many Lobbies to update.
     */
    limit?: number
  }

  /**
   * Lobby updateManyAndReturn
   */
  export type LobbyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * The data used to update Lobbies.
     */
    data: XOR<LobbyUpdateManyMutationInput, LobbyUncheckedUpdateManyInput>
    /**
     * Filter which Lobbies to update
     */
    where?: LobbyWhereInput
    /**
     * Limit how many Lobbies to update.
     */
    limit?: number
  }

  /**
   * Lobby upsert
   */
  export type LobbyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * The filter to search for the Lobby to update in case it exists.
     */
    where: LobbyWhereUniqueInput
    /**
     * In case the Lobby found by the `where` argument doesn't exist, create a new Lobby with this data.
     */
    create: XOR<LobbyCreateInput, LobbyUncheckedCreateInput>
    /**
     * In case the Lobby was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LobbyUpdateInput, LobbyUncheckedUpdateInput>
  }

  /**
   * Lobby delete
   */
  export type LobbyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter which Lobby to delete.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby deleteMany
   */
  export type LobbyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lobbies to delete
     */
    where?: LobbyWhereInput
    /**
     * Limit how many Lobbies to delete.
     */
    limit?: number
  }

  /**
   * Lobby.players
   */
  export type Lobby$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    where?: LobbyPlayerWhereInput
    orderBy?: LobbyPlayerOrderByWithRelationInput | LobbyPlayerOrderByWithRelationInput[]
    cursor?: LobbyPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LobbyPlayerScalarFieldEnum | LobbyPlayerScalarFieldEnum[]
  }

  /**
   * Lobby without action
   */
  export type LobbyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
  }


  /**
   * Model LobbyPlayer
   */

  export type AggregateLobbyPlayer = {
    _count: LobbyPlayerCountAggregateOutputType | null
    _avg: LobbyPlayerAvgAggregateOutputType | null
    _sum: LobbyPlayerSumAggregateOutputType | null
    _min: LobbyPlayerMinAggregateOutputType | null
    _max: LobbyPlayerMaxAggregateOutputType | null
  }

  export type LobbyPlayerAvgAggregateOutputType = {
    position: number | null
  }

  export type LobbyPlayerSumAggregateOutputType = {
    position: number | null
  }

  export type LobbyPlayerMinAggregateOutputType = {
    id: string | null
    lobbyId: string | null
    userId: string | null
    position: number | null
    createdAt: Date | null
  }

  export type LobbyPlayerMaxAggregateOutputType = {
    id: string | null
    lobbyId: string | null
    userId: string | null
    position: number | null
    createdAt: Date | null
  }

  export type LobbyPlayerCountAggregateOutputType = {
    id: number
    lobbyId: number
    userId: number
    position: number
    createdAt: number
    _all: number
  }


  export type LobbyPlayerAvgAggregateInputType = {
    position?: true
  }

  export type LobbyPlayerSumAggregateInputType = {
    position?: true
  }

  export type LobbyPlayerMinAggregateInputType = {
    id?: true
    lobbyId?: true
    userId?: true
    position?: true
    createdAt?: true
  }

  export type LobbyPlayerMaxAggregateInputType = {
    id?: true
    lobbyId?: true
    userId?: true
    position?: true
    createdAt?: true
  }

  export type LobbyPlayerCountAggregateInputType = {
    id?: true
    lobbyId?: true
    userId?: true
    position?: true
    createdAt?: true
    _all?: true
  }

  export type LobbyPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LobbyPlayer to aggregate.
     */
    where?: LobbyPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyPlayers to fetch.
     */
    orderBy?: LobbyPlayerOrderByWithRelationInput | LobbyPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LobbyPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LobbyPlayers
    **/
    _count?: true | LobbyPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LobbyPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LobbyPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LobbyPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LobbyPlayerMaxAggregateInputType
  }

  export type GetLobbyPlayerAggregateType<T extends LobbyPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateLobbyPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobbyPlayer[P]>
      : GetScalarType<T[P], AggregateLobbyPlayer[P]>
  }




  export type LobbyPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyPlayerWhereInput
    orderBy?: LobbyPlayerOrderByWithAggregationInput | LobbyPlayerOrderByWithAggregationInput[]
    by: LobbyPlayerScalarFieldEnum[] | LobbyPlayerScalarFieldEnum
    having?: LobbyPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LobbyPlayerCountAggregateInputType | true
    _avg?: LobbyPlayerAvgAggregateInputType
    _sum?: LobbyPlayerSumAggregateInputType
    _min?: LobbyPlayerMinAggregateInputType
    _max?: LobbyPlayerMaxAggregateInputType
  }

  export type LobbyPlayerGroupByOutputType = {
    id: string
    lobbyId: string
    userId: string
    position: number
    createdAt: Date
    _count: LobbyPlayerCountAggregateOutputType | null
    _avg: LobbyPlayerAvgAggregateOutputType | null
    _sum: LobbyPlayerSumAggregateOutputType | null
    _min: LobbyPlayerMinAggregateOutputType | null
    _max: LobbyPlayerMaxAggregateOutputType | null
  }

  type GetLobbyPlayerGroupByPayload<T extends LobbyPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LobbyPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LobbyPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LobbyPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], LobbyPlayerGroupByOutputType[P]>
        }
      >
    >


  export type LobbyPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lobbyId?: boolean
    userId?: boolean
    position?: boolean
    createdAt?: boolean
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyPlayer"]>

  export type LobbyPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lobbyId?: boolean
    userId?: boolean
    position?: boolean
    createdAt?: boolean
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyPlayer"]>

  export type LobbyPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lobbyId?: boolean
    userId?: boolean
    position?: boolean
    createdAt?: boolean
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyPlayer"]>

  export type LobbyPlayerSelectScalar = {
    id?: boolean
    lobbyId?: boolean
    userId?: boolean
    position?: boolean
    createdAt?: boolean
  }

  export type LobbyPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lobbyId" | "userId" | "position" | "createdAt", ExtArgs["result"]["lobbyPlayer"]>
  export type LobbyPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
  }
  export type LobbyPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
  }
  export type LobbyPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
  }

  export type $LobbyPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LobbyPlayer"
    objects: {
      lobby: Prisma.$LobbyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lobbyId: string
      userId: string
      position: number
      createdAt: Date
    }, ExtArgs["result"]["lobbyPlayer"]>
    composites: {}
  }

  type LobbyPlayerGetPayload<S extends boolean | null | undefined | LobbyPlayerDefaultArgs> = $Result.GetResult<Prisma.$LobbyPlayerPayload, S>

  type LobbyPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LobbyPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LobbyPlayerCountAggregateInputType | true
    }

  export interface LobbyPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LobbyPlayer'], meta: { name: 'LobbyPlayer' } }
    /**
     * Find zero or one LobbyPlayer that matches the filter.
     * @param {LobbyPlayerFindUniqueArgs} args - Arguments to find a LobbyPlayer
     * @example
     * // Get one LobbyPlayer
     * const lobbyPlayer = await prisma.lobbyPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LobbyPlayerFindUniqueArgs>(args: SelectSubset<T, LobbyPlayerFindUniqueArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LobbyPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LobbyPlayerFindUniqueOrThrowArgs} args - Arguments to find a LobbyPlayer
     * @example
     * // Get one LobbyPlayer
     * const lobbyPlayer = await prisma.lobbyPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LobbyPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, LobbyPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LobbyPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerFindFirstArgs} args - Arguments to find a LobbyPlayer
     * @example
     * // Get one LobbyPlayer
     * const lobbyPlayer = await prisma.lobbyPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LobbyPlayerFindFirstArgs>(args?: SelectSubset<T, LobbyPlayerFindFirstArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LobbyPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerFindFirstOrThrowArgs} args - Arguments to find a LobbyPlayer
     * @example
     * // Get one LobbyPlayer
     * const lobbyPlayer = await prisma.lobbyPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LobbyPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, LobbyPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LobbyPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LobbyPlayers
     * const lobbyPlayers = await prisma.lobbyPlayer.findMany()
     * 
     * // Get first 10 LobbyPlayers
     * const lobbyPlayers = await prisma.lobbyPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lobbyPlayerWithIdOnly = await prisma.lobbyPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LobbyPlayerFindManyArgs>(args?: SelectSubset<T, LobbyPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LobbyPlayer.
     * @param {LobbyPlayerCreateArgs} args - Arguments to create a LobbyPlayer.
     * @example
     * // Create one LobbyPlayer
     * const LobbyPlayer = await prisma.lobbyPlayer.create({
     *   data: {
     *     // ... data to create a LobbyPlayer
     *   }
     * })
     * 
     */
    create<T extends LobbyPlayerCreateArgs>(args: SelectSubset<T, LobbyPlayerCreateArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LobbyPlayers.
     * @param {LobbyPlayerCreateManyArgs} args - Arguments to create many LobbyPlayers.
     * @example
     * // Create many LobbyPlayers
     * const lobbyPlayer = await prisma.lobbyPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LobbyPlayerCreateManyArgs>(args?: SelectSubset<T, LobbyPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LobbyPlayers and returns the data saved in the database.
     * @param {LobbyPlayerCreateManyAndReturnArgs} args - Arguments to create many LobbyPlayers.
     * @example
     * // Create many LobbyPlayers
     * const lobbyPlayer = await prisma.lobbyPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LobbyPlayers and only return the `id`
     * const lobbyPlayerWithIdOnly = await prisma.lobbyPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LobbyPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, LobbyPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LobbyPlayer.
     * @param {LobbyPlayerDeleteArgs} args - Arguments to delete one LobbyPlayer.
     * @example
     * // Delete one LobbyPlayer
     * const LobbyPlayer = await prisma.lobbyPlayer.delete({
     *   where: {
     *     // ... filter to delete one LobbyPlayer
     *   }
     * })
     * 
     */
    delete<T extends LobbyPlayerDeleteArgs>(args: SelectSubset<T, LobbyPlayerDeleteArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LobbyPlayer.
     * @param {LobbyPlayerUpdateArgs} args - Arguments to update one LobbyPlayer.
     * @example
     * // Update one LobbyPlayer
     * const lobbyPlayer = await prisma.lobbyPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LobbyPlayerUpdateArgs>(args: SelectSubset<T, LobbyPlayerUpdateArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LobbyPlayers.
     * @param {LobbyPlayerDeleteManyArgs} args - Arguments to filter LobbyPlayers to delete.
     * @example
     * // Delete a few LobbyPlayers
     * const { count } = await prisma.lobbyPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LobbyPlayerDeleteManyArgs>(args?: SelectSubset<T, LobbyPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LobbyPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LobbyPlayers
     * const lobbyPlayer = await prisma.lobbyPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LobbyPlayerUpdateManyArgs>(args: SelectSubset<T, LobbyPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LobbyPlayers and returns the data updated in the database.
     * @param {LobbyPlayerUpdateManyAndReturnArgs} args - Arguments to update many LobbyPlayers.
     * @example
     * // Update many LobbyPlayers
     * const lobbyPlayer = await prisma.lobbyPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LobbyPlayers and only return the `id`
     * const lobbyPlayerWithIdOnly = await prisma.lobbyPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LobbyPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, LobbyPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LobbyPlayer.
     * @param {LobbyPlayerUpsertArgs} args - Arguments to update or create a LobbyPlayer.
     * @example
     * // Update or create a LobbyPlayer
     * const lobbyPlayer = await prisma.lobbyPlayer.upsert({
     *   create: {
     *     // ... data to create a LobbyPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LobbyPlayer we want to update
     *   }
     * })
     */
    upsert<T extends LobbyPlayerUpsertArgs>(args: SelectSubset<T, LobbyPlayerUpsertArgs<ExtArgs>>): Prisma__LobbyPlayerClient<$Result.GetResult<Prisma.$LobbyPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LobbyPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerCountArgs} args - Arguments to filter LobbyPlayers to count.
     * @example
     * // Count the number of LobbyPlayers
     * const count = await prisma.lobbyPlayer.count({
     *   where: {
     *     // ... the filter for the LobbyPlayers we want to count
     *   }
     * })
    **/
    count<T extends LobbyPlayerCountArgs>(
      args?: Subset<T, LobbyPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LobbyPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LobbyPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LobbyPlayerAggregateArgs>(args: Subset<T, LobbyPlayerAggregateArgs>): Prisma.PrismaPromise<GetLobbyPlayerAggregateType<T>>

    /**
     * Group by LobbyPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LobbyPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LobbyPlayerGroupByArgs['orderBy'] }
        : { orderBy?: LobbyPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LobbyPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobbyPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LobbyPlayer model
   */
  readonly fields: LobbyPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LobbyPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LobbyPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lobby<T extends LobbyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LobbyDefaultArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LobbyPlayer model
   */
  interface LobbyPlayerFieldRefs {
    readonly id: FieldRef<"LobbyPlayer", 'String'>
    readonly lobbyId: FieldRef<"LobbyPlayer", 'String'>
    readonly userId: FieldRef<"LobbyPlayer", 'String'>
    readonly position: FieldRef<"LobbyPlayer", 'Int'>
    readonly createdAt: FieldRef<"LobbyPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LobbyPlayer findUnique
   */
  export type LobbyPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * Filter, which LobbyPlayer to fetch.
     */
    where: LobbyPlayerWhereUniqueInput
  }

  /**
   * LobbyPlayer findUniqueOrThrow
   */
  export type LobbyPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * Filter, which LobbyPlayer to fetch.
     */
    where: LobbyPlayerWhereUniqueInput
  }

  /**
   * LobbyPlayer findFirst
   */
  export type LobbyPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * Filter, which LobbyPlayer to fetch.
     */
    where?: LobbyPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyPlayers to fetch.
     */
    orderBy?: LobbyPlayerOrderByWithRelationInput | LobbyPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LobbyPlayers.
     */
    cursor?: LobbyPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LobbyPlayers.
     */
    distinct?: LobbyPlayerScalarFieldEnum | LobbyPlayerScalarFieldEnum[]
  }

  /**
   * LobbyPlayer findFirstOrThrow
   */
  export type LobbyPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * Filter, which LobbyPlayer to fetch.
     */
    where?: LobbyPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyPlayers to fetch.
     */
    orderBy?: LobbyPlayerOrderByWithRelationInput | LobbyPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LobbyPlayers.
     */
    cursor?: LobbyPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LobbyPlayers.
     */
    distinct?: LobbyPlayerScalarFieldEnum | LobbyPlayerScalarFieldEnum[]
  }

  /**
   * LobbyPlayer findMany
   */
  export type LobbyPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * Filter, which LobbyPlayers to fetch.
     */
    where?: LobbyPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyPlayers to fetch.
     */
    orderBy?: LobbyPlayerOrderByWithRelationInput | LobbyPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LobbyPlayers.
     */
    cursor?: LobbyPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyPlayers.
     */
    skip?: number
    distinct?: LobbyPlayerScalarFieldEnum | LobbyPlayerScalarFieldEnum[]
  }

  /**
   * LobbyPlayer create
   */
  export type LobbyPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a LobbyPlayer.
     */
    data: XOR<LobbyPlayerCreateInput, LobbyPlayerUncheckedCreateInput>
  }

  /**
   * LobbyPlayer createMany
   */
  export type LobbyPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LobbyPlayers.
     */
    data: LobbyPlayerCreateManyInput | LobbyPlayerCreateManyInput[]
  }

  /**
   * LobbyPlayer createManyAndReturn
   */
  export type LobbyPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many LobbyPlayers.
     */
    data: LobbyPlayerCreateManyInput | LobbyPlayerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LobbyPlayer update
   */
  export type LobbyPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a LobbyPlayer.
     */
    data: XOR<LobbyPlayerUpdateInput, LobbyPlayerUncheckedUpdateInput>
    /**
     * Choose, which LobbyPlayer to update.
     */
    where: LobbyPlayerWhereUniqueInput
  }

  /**
   * LobbyPlayer updateMany
   */
  export type LobbyPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LobbyPlayers.
     */
    data: XOR<LobbyPlayerUpdateManyMutationInput, LobbyPlayerUncheckedUpdateManyInput>
    /**
     * Filter which LobbyPlayers to update
     */
    where?: LobbyPlayerWhereInput
    /**
     * Limit how many LobbyPlayers to update.
     */
    limit?: number
  }

  /**
   * LobbyPlayer updateManyAndReturn
   */
  export type LobbyPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * The data used to update LobbyPlayers.
     */
    data: XOR<LobbyPlayerUpdateManyMutationInput, LobbyPlayerUncheckedUpdateManyInput>
    /**
     * Filter which LobbyPlayers to update
     */
    where?: LobbyPlayerWhereInput
    /**
     * Limit how many LobbyPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LobbyPlayer upsert
   */
  export type LobbyPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the LobbyPlayer to update in case it exists.
     */
    where: LobbyPlayerWhereUniqueInput
    /**
     * In case the LobbyPlayer found by the `where` argument doesn't exist, create a new LobbyPlayer with this data.
     */
    create: XOR<LobbyPlayerCreateInput, LobbyPlayerUncheckedCreateInput>
    /**
     * In case the LobbyPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LobbyPlayerUpdateInput, LobbyPlayerUncheckedUpdateInput>
  }

  /**
   * LobbyPlayer delete
   */
  export type LobbyPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
    /**
     * Filter which LobbyPlayer to delete.
     */
    where: LobbyPlayerWhereUniqueInput
  }

  /**
   * LobbyPlayer deleteMany
   */
  export type LobbyPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LobbyPlayers to delete
     */
    where?: LobbyPlayerWhereInput
    /**
     * Limit how many LobbyPlayers to delete.
     */
    limit?: number
  }

  /**
   * LobbyPlayer without action
   */
  export type LobbyPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyPlayer
     */
    select?: LobbyPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyPlayer
     */
    omit?: LobbyPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyPlayerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isGuest: 'isGuest',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserStatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gamesPlayed: 'gamesPlayed',
    gamesWon: 'gamesWon',
    totalKnockouts: 'totalKnockouts',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStatScalarFieldEnum = (typeof UserStatScalarFieldEnum)[keyof typeof UserStatScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    status: 'status',
    maxPlayers: 'maxPlayers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GamePlayerScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    position: 'position',
    cards: 'cards',
    isKnockedOut: 'isKnockedOut',
    calledUno: 'calledUno',
    createdAt: 'createdAt'
  };

  export type GamePlayerScalarFieldEnum = (typeof GamePlayerScalarFieldEnum)[keyof typeof GamePlayerScalarFieldEnum]


  export const GameActionScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    playerId: 'playerId',
    type: 'type',
    cardPlayed: 'cardPlayed',
    cardsDrawn: 'cardsDrawn',
    targetId: 'targetId',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type GameActionScalarFieldEnum = (typeof GameActionScalarFieldEnum)[keyof typeof GameActionScalarFieldEnum]


  export const LobbyScalarFieldEnum: {
    id: 'id',
    code: 'code',
    createdBy: 'createdBy',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LobbyScalarFieldEnum = (typeof LobbyScalarFieldEnum)[keyof typeof LobbyScalarFieldEnum]


  export const LobbyPlayerScalarFieldEnum: {
    id: 'id',
    lobbyId: 'lobbyId',
    userId: 'userId',
    position: 'position',
    createdAt: 'createdAt'
  };

  export type LobbyPlayerScalarFieldEnum = (typeof LobbyPlayerScalarFieldEnum)[keyof typeof LobbyPlayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'ActionType'
   */
  export type EnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isGuest?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    games?: GamePlayerListRelationFilter
    stats?: XOR<UserStatNullableScalarRelationFilter, UserStatWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    games?: GamePlayerOrderByRelationAggregateInput
    stats?: UserStatOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isGuest?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    games?: GamePlayerListRelationFilter
    stats?: XOR<UserStatNullableScalarRelationFilter, UserStatWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isGuest?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserStatWhereInput = {
    AND?: UserStatWhereInput | UserStatWhereInput[]
    OR?: UserStatWhereInput[]
    NOT?: UserStatWhereInput | UserStatWhereInput[]
    id?: IntFilter<"UserStat"> | number
    userId?: StringFilter<"UserStat"> | string
    gamesPlayed?: IntFilter<"UserStat"> | number
    gamesWon?: IntFilter<"UserStat"> | number
    totalKnockouts?: IntFilter<"UserStat"> | number
    createdAt?: DateTimeFilter<"UserStat"> | Date | string
    updatedAt?: DateTimeFilter<"UserStat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserStatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserStatWhereInput | UserStatWhereInput[]
    OR?: UserStatWhereInput[]
    NOT?: UserStatWhereInput | UserStatWhereInput[]
    gamesPlayed?: IntFilter<"UserStat"> | number
    gamesWon?: IntFilter<"UserStat"> | number
    totalKnockouts?: IntFilter<"UserStat"> | number
    createdAt?: DateTimeFilter<"UserStat"> | Date | string
    updatedAt?: DateTimeFilter<"UserStat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserStatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStatCountOrderByAggregateInput
    _avg?: UserStatAvgOrderByAggregateInput
    _max?: UserStatMaxOrderByAggregateInput
    _min?: UserStatMinOrderByAggregateInput
    _sum?: UserStatSumOrderByAggregateInput
  }

  export type UserStatScalarWhereWithAggregatesInput = {
    AND?: UserStatScalarWhereWithAggregatesInput | UserStatScalarWhereWithAggregatesInput[]
    OR?: UserStatScalarWhereWithAggregatesInput[]
    NOT?: UserStatScalarWhereWithAggregatesInput | UserStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserStat"> | number
    userId?: StringWithAggregatesFilter<"UserStat"> | string
    gamesPlayed?: IntWithAggregatesFilter<"UserStat"> | number
    gamesWon?: IntWithAggregatesFilter<"UserStat"> | number
    totalKnockouts?: IntWithAggregatesFilter<"UserStat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStat"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    maxPlayers?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    startedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    players?: GamePlayerListRelationFilter
    actions?: GameActionListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    players?: GamePlayerOrderByRelationAggregateInput
    actions?: GameActionOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    maxPlayers?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    startedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    players?: GamePlayerListRelationFilter
    actions?: GameActionListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    maxPlayers?: IntWithAggregatesFilter<"Game"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
  }

  export type GamePlayerWhereInput = {
    AND?: GamePlayerWhereInput | GamePlayerWhereInput[]
    OR?: GamePlayerWhereInput[]
    NOT?: GamePlayerWhereInput | GamePlayerWhereInput[]
    id?: StringFilter<"GamePlayer"> | string
    gameId?: StringFilter<"GamePlayer"> | string
    userId?: StringFilter<"GamePlayer"> | string
    position?: IntFilter<"GamePlayer"> | number
    cards?: StringFilter<"GamePlayer"> | string
    isKnockedOut?: BoolFilter<"GamePlayer"> | boolean
    calledUno?: BoolFilter<"GamePlayer"> | boolean
    createdAt?: DateTimeFilter<"GamePlayer"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GamePlayerOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    cards?: SortOrder
    isKnockedOut?: SortOrder
    calledUno?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GamePlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId_userId?: GamePlayerGameIdUserIdCompoundUniqueInput
    AND?: GamePlayerWhereInput | GamePlayerWhereInput[]
    OR?: GamePlayerWhereInput[]
    NOT?: GamePlayerWhereInput | GamePlayerWhereInput[]
    gameId?: StringFilter<"GamePlayer"> | string
    userId?: StringFilter<"GamePlayer"> | string
    position?: IntFilter<"GamePlayer"> | number
    cards?: StringFilter<"GamePlayer"> | string
    isKnockedOut?: BoolFilter<"GamePlayer"> | boolean
    calledUno?: BoolFilter<"GamePlayer"> | boolean
    createdAt?: DateTimeFilter<"GamePlayer"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "gameId_userId">

  export type GamePlayerOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    cards?: SortOrder
    isKnockedOut?: SortOrder
    calledUno?: SortOrder
    createdAt?: SortOrder
    _count?: GamePlayerCountOrderByAggregateInput
    _avg?: GamePlayerAvgOrderByAggregateInput
    _max?: GamePlayerMaxOrderByAggregateInput
    _min?: GamePlayerMinOrderByAggregateInput
    _sum?: GamePlayerSumOrderByAggregateInput
  }

  export type GamePlayerScalarWhereWithAggregatesInput = {
    AND?: GamePlayerScalarWhereWithAggregatesInput | GamePlayerScalarWhereWithAggregatesInput[]
    OR?: GamePlayerScalarWhereWithAggregatesInput[]
    NOT?: GamePlayerScalarWhereWithAggregatesInput | GamePlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GamePlayer"> | string
    gameId?: StringWithAggregatesFilter<"GamePlayer"> | string
    userId?: StringWithAggregatesFilter<"GamePlayer"> | string
    position?: IntWithAggregatesFilter<"GamePlayer"> | number
    cards?: StringWithAggregatesFilter<"GamePlayer"> | string
    isKnockedOut?: BoolWithAggregatesFilter<"GamePlayer"> | boolean
    calledUno?: BoolWithAggregatesFilter<"GamePlayer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GamePlayer"> | Date | string
  }

  export type GameActionWhereInput = {
    AND?: GameActionWhereInput | GameActionWhereInput[]
    OR?: GameActionWhereInput[]
    NOT?: GameActionWhereInput | GameActionWhereInput[]
    id?: StringFilter<"GameAction"> | string
    gameId?: StringFilter<"GameAction"> | string
    playerId?: StringFilter<"GameAction"> | string
    type?: EnumActionTypeFilter<"GameAction"> | $Enums.ActionType
    cardPlayed?: StringNullableFilter<"GameAction"> | string | null
    cardsDrawn?: IntFilter<"GameAction"> | number
    targetId?: StringNullableFilter<"GameAction"> | string | null
    color?: StringNullableFilter<"GameAction"> | string | null
    createdAt?: DateTimeFilter<"GameAction"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type GameActionOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    cardPlayed?: SortOrderInput | SortOrder
    cardsDrawn?: SortOrder
    targetId?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type GameActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameActionWhereInput | GameActionWhereInput[]
    OR?: GameActionWhereInput[]
    NOT?: GameActionWhereInput | GameActionWhereInput[]
    gameId?: StringFilter<"GameAction"> | string
    playerId?: StringFilter<"GameAction"> | string
    type?: EnumActionTypeFilter<"GameAction"> | $Enums.ActionType
    cardPlayed?: StringNullableFilter<"GameAction"> | string | null
    cardsDrawn?: IntFilter<"GameAction"> | number
    targetId?: StringNullableFilter<"GameAction"> | string | null
    color?: StringNullableFilter<"GameAction"> | string | null
    createdAt?: DateTimeFilter<"GameAction"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type GameActionOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    cardPlayed?: SortOrderInput | SortOrder
    cardsDrawn?: SortOrder
    targetId?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GameActionCountOrderByAggregateInput
    _avg?: GameActionAvgOrderByAggregateInput
    _max?: GameActionMaxOrderByAggregateInput
    _min?: GameActionMinOrderByAggregateInput
    _sum?: GameActionSumOrderByAggregateInput
  }

  export type GameActionScalarWhereWithAggregatesInput = {
    AND?: GameActionScalarWhereWithAggregatesInput | GameActionScalarWhereWithAggregatesInput[]
    OR?: GameActionScalarWhereWithAggregatesInput[]
    NOT?: GameActionScalarWhereWithAggregatesInput | GameActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameAction"> | string
    gameId?: StringWithAggregatesFilter<"GameAction"> | string
    playerId?: StringWithAggregatesFilter<"GameAction"> | string
    type?: EnumActionTypeWithAggregatesFilter<"GameAction"> | $Enums.ActionType
    cardPlayed?: StringNullableWithAggregatesFilter<"GameAction"> | string | null
    cardsDrawn?: IntWithAggregatesFilter<"GameAction"> | number
    targetId?: StringNullableWithAggregatesFilter<"GameAction"> | string | null
    color?: StringNullableWithAggregatesFilter<"GameAction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GameAction"> | Date | string
  }

  export type LobbyWhereInput = {
    AND?: LobbyWhereInput | LobbyWhereInput[]
    OR?: LobbyWhereInput[]
    NOT?: LobbyWhereInput | LobbyWhereInput[]
    id?: StringFilter<"Lobby"> | string
    code?: StringFilter<"Lobby"> | string
    createdBy?: StringFilter<"Lobby"> | string
    status?: EnumGameStatusFilter<"Lobby"> | $Enums.GameStatus
    createdAt?: DateTimeFilter<"Lobby"> | Date | string
    players?: LobbyPlayerListRelationFilter
  }

  export type LobbyOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    players?: LobbyPlayerOrderByRelationAggregateInput
  }

  export type LobbyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: LobbyWhereInput | LobbyWhereInput[]
    OR?: LobbyWhereInput[]
    NOT?: LobbyWhereInput | LobbyWhereInput[]
    createdBy?: StringFilter<"Lobby"> | string
    status?: EnumGameStatusFilter<"Lobby"> | $Enums.GameStatus
    createdAt?: DateTimeFilter<"Lobby"> | Date | string
    players?: LobbyPlayerListRelationFilter
  }, "id" | "code">

  export type LobbyOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LobbyCountOrderByAggregateInput
    _max?: LobbyMaxOrderByAggregateInput
    _min?: LobbyMinOrderByAggregateInput
  }

  export type LobbyScalarWhereWithAggregatesInput = {
    AND?: LobbyScalarWhereWithAggregatesInput | LobbyScalarWhereWithAggregatesInput[]
    OR?: LobbyScalarWhereWithAggregatesInput[]
    NOT?: LobbyScalarWhereWithAggregatesInput | LobbyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lobby"> | string
    code?: StringWithAggregatesFilter<"Lobby"> | string
    createdBy?: StringWithAggregatesFilter<"Lobby"> | string
    status?: EnumGameStatusWithAggregatesFilter<"Lobby"> | $Enums.GameStatus
    createdAt?: DateTimeWithAggregatesFilter<"Lobby"> | Date | string
  }

  export type LobbyPlayerWhereInput = {
    AND?: LobbyPlayerWhereInput | LobbyPlayerWhereInput[]
    OR?: LobbyPlayerWhereInput[]
    NOT?: LobbyPlayerWhereInput | LobbyPlayerWhereInput[]
    id?: StringFilter<"LobbyPlayer"> | string
    lobbyId?: StringFilter<"LobbyPlayer"> | string
    userId?: StringFilter<"LobbyPlayer"> | string
    position?: IntFilter<"LobbyPlayer"> | number
    createdAt?: DateTimeFilter<"LobbyPlayer"> | Date | string
    lobby?: XOR<LobbyScalarRelationFilter, LobbyWhereInput>
  }

  export type LobbyPlayerOrderByWithRelationInput = {
    id?: SortOrder
    lobbyId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    lobby?: LobbyOrderByWithRelationInput
  }

  export type LobbyPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lobbyId_userId?: LobbyPlayerLobbyIdUserIdCompoundUniqueInput
    AND?: LobbyPlayerWhereInput | LobbyPlayerWhereInput[]
    OR?: LobbyPlayerWhereInput[]
    NOT?: LobbyPlayerWhereInput | LobbyPlayerWhereInput[]
    lobbyId?: StringFilter<"LobbyPlayer"> | string
    userId?: StringFilter<"LobbyPlayer"> | string
    position?: IntFilter<"LobbyPlayer"> | number
    createdAt?: DateTimeFilter<"LobbyPlayer"> | Date | string
    lobby?: XOR<LobbyScalarRelationFilter, LobbyWhereInput>
  }, "id" | "lobbyId_userId">

  export type LobbyPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    lobbyId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    _count?: LobbyPlayerCountOrderByAggregateInput
    _avg?: LobbyPlayerAvgOrderByAggregateInput
    _max?: LobbyPlayerMaxOrderByAggregateInput
    _min?: LobbyPlayerMinOrderByAggregateInput
    _sum?: LobbyPlayerSumOrderByAggregateInput
  }

  export type LobbyPlayerScalarWhereWithAggregatesInput = {
    AND?: LobbyPlayerScalarWhereWithAggregatesInput | LobbyPlayerScalarWhereWithAggregatesInput[]
    OR?: LobbyPlayerScalarWhereWithAggregatesInput[]
    NOT?: LobbyPlayerScalarWhereWithAggregatesInput | LobbyPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LobbyPlayer"> | string
    lobbyId?: StringWithAggregatesFilter<"LobbyPlayer"> | string
    userId?: StringWithAggregatesFilter<"LobbyPlayer"> | string
    position?: IntWithAggregatesFilter<"LobbyPlayer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LobbyPlayer"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GamePlayerCreateNestedManyWithoutUserInput
    stats?: UserStatCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GamePlayerUncheckedCreateNestedManyWithoutUserInput
    stats?: UserStatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GamePlayerUpdateManyWithoutUserNestedInput
    stats?: UserStatUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GamePlayerUncheckedUpdateManyWithoutUserNestedInput
    stats?: UserStatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatCreateInput = {
    gamesPlayed?: number
    gamesWon?: number
    totalKnockouts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStatsInput
  }

  export type UserStatUncheckedCreateInput = {
    id?: number
    userId: string
    gamesPlayed?: number
    gamesWon?: number
    totalKnockouts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatUpdateInput = {
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalKnockouts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatsNestedInput
  }

  export type UserStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalKnockouts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatCreateManyInput = {
    id?: number
    userId: string
    gamesPlayed?: number
    gamesWon?: number
    totalKnockouts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatUpdateManyMutationInput = {
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalKnockouts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalKnockouts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    players?: GamePlayerCreateNestedManyWithoutGameInput
    actions?: GameActionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    players?: GamePlayerUncheckedCreateNestedManyWithoutGameInput
    actions?: GameActionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: GamePlayerUpdateManyWithoutGameNestedInput
    actions?: GameActionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: GamePlayerUncheckedUpdateManyWithoutGameNestedInput
    actions?: GameActionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GamePlayerCreateInput = {
    id?: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutPlayersInput
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GamePlayerUncheckedCreateInput = {
    id?: string
    gameId: string
    userId: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
  }

  export type GamePlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamePlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerCreateManyInput = {
    id?: string
    gameId: string
    userId: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
  }

  export type GamePlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameActionCreateInput = {
    id?: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed?: string | null
    cardsDrawn?: number
    targetId?: string | null
    color?: string | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutActionsInput
  }

  export type GameActionUncheckedCreateInput = {
    id?: string
    gameId: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed?: string | null
    cardsDrawn?: number
    targetId?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type GameActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutActionsNestedInput
  }

  export type GameActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameActionCreateManyInput = {
    id?: string
    gameId: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed?: string | null
    cardsDrawn?: number
    targetId?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type GameActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyCreateInput = {
    id?: string
    code: string
    createdBy: string
    status?: $Enums.GameStatus
    createdAt?: Date | string
    players?: LobbyPlayerCreateNestedManyWithoutLobbyInput
  }

  export type LobbyUncheckedCreateInput = {
    id?: string
    code: string
    createdBy: string
    status?: $Enums.GameStatus
    createdAt?: Date | string
    players?: LobbyPlayerUncheckedCreateNestedManyWithoutLobbyInput
  }

  export type LobbyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: LobbyPlayerUpdateManyWithoutLobbyNestedInput
  }

  export type LobbyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: LobbyPlayerUncheckedUpdateManyWithoutLobbyNestedInput
  }

  export type LobbyCreateManyInput = {
    id?: string
    code: string
    createdBy: string
    status?: $Enums.GameStatus
    createdAt?: Date | string
  }

  export type LobbyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyPlayerCreateInput = {
    id?: string
    userId: string
    position: number
    createdAt?: Date | string
    lobby: LobbyCreateNestedOneWithoutPlayersInput
  }

  export type LobbyPlayerUncheckedCreateInput = {
    id?: string
    lobbyId: string
    userId: string
    position: number
    createdAt?: Date | string
  }

  export type LobbyPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobby?: LobbyUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type LobbyPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lobbyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyPlayerCreateManyInput = {
    id?: string
    lobbyId: string
    userId: string
    position: number
    createdAt?: Date | string
  }

  export type LobbyPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lobbyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GamePlayerListRelationFilter = {
    every?: GamePlayerWhereInput
    some?: GamePlayerWhereInput
    none?: GamePlayerWhereInput
  }

  export type UserStatNullableScalarRelationFilter = {
    is?: UserStatWhereInput | null
    isNot?: UserStatWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GamePlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserStatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatAvgOrderByAggregateInput = {
    id?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
  }

  export type UserStatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatSumOrderByAggregateInput = {
    id?: SortOrder
    gamesPlayed?: SortOrder
    gamesWon?: SortOrder
    totalKnockouts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GameActionListRelationFilter = {
    every?: GameActionWhereInput
    some?: GameActionWhereInput
    none?: GameActionWhereInput
  }

  export type GameActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    maxPlayers?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    maxPlayers?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type GamePlayerGameIdUserIdCompoundUniqueInput = {
    gameId: string
    userId: string
  }

  export type GamePlayerCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    cards?: SortOrder
    isKnockedOut?: SortOrder
    calledUno?: SortOrder
    createdAt?: SortOrder
  }

  export type GamePlayerAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GamePlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    cards?: SortOrder
    isKnockedOut?: SortOrder
    calledUno?: SortOrder
    createdAt?: SortOrder
  }

  export type GamePlayerMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    cards?: SortOrder
    isKnockedOut?: SortOrder
    calledUno?: SortOrder
    createdAt?: SortOrder
  }

  export type GamePlayerSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[]
    notIn?: $Enums.ActionType[]
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type GameActionCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    cardPlayed?: SortOrder
    cardsDrawn?: SortOrder
    targetId?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type GameActionAvgOrderByAggregateInput = {
    cardsDrawn?: SortOrder
  }

  export type GameActionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    cardPlayed?: SortOrder
    cardsDrawn?: SortOrder
    targetId?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type GameActionMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    cardPlayed?: SortOrder
    cardsDrawn?: SortOrder
    targetId?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type GameActionSumOrderByAggregateInput = {
    cardsDrawn?: SortOrder
  }

  export type EnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[]
    notIn?: $Enums.ActionType[]
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type LobbyPlayerListRelationFilter = {
    every?: LobbyPlayerWhereInput
    some?: LobbyPlayerWhereInput
    none?: LobbyPlayerWhereInput
  }

  export type LobbyPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LobbyCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LobbyMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LobbyMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LobbyScalarRelationFilter = {
    is?: LobbyWhereInput
    isNot?: LobbyWhereInput
  }

  export type LobbyPlayerLobbyIdUserIdCompoundUniqueInput = {
    lobbyId: string
    userId: string
  }

  export type LobbyPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    lobbyId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type LobbyPlayerAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type LobbyPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    lobbyId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type LobbyPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    lobbyId?: SortOrder
    userId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type LobbyPlayerSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type GamePlayerCreateNestedManyWithoutUserInput = {
    create?: XOR<GamePlayerCreateWithoutUserInput, GamePlayerUncheckedCreateWithoutUserInput> | GamePlayerCreateWithoutUserInput[] | GamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutUserInput | GamePlayerCreateOrConnectWithoutUserInput[]
    createMany?: GamePlayerCreateManyUserInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type UserStatCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatCreateWithoutUserInput, UserStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatCreateOrConnectWithoutUserInput
    connect?: UserStatWhereUniqueInput
  }

  export type GamePlayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GamePlayerCreateWithoutUserInput, GamePlayerUncheckedCreateWithoutUserInput> | GamePlayerCreateWithoutUserInput[] | GamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutUserInput | GamePlayerCreateOrConnectWithoutUserInput[]
    createMany?: GamePlayerCreateManyUserInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type UserStatUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatCreateWithoutUserInput, UserStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatCreateOrConnectWithoutUserInput
    connect?: UserStatWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GamePlayerUpdateManyWithoutUserNestedInput = {
    create?: XOR<GamePlayerCreateWithoutUserInput, GamePlayerUncheckedCreateWithoutUserInput> | GamePlayerCreateWithoutUserInput[] | GamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutUserInput | GamePlayerCreateOrConnectWithoutUserInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutUserInput | GamePlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GamePlayerCreateManyUserInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutUserInput | GamePlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutUserInput | GamePlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type UserStatUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatCreateWithoutUserInput, UserStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatCreateOrConnectWithoutUserInput
    upsert?: UserStatUpsertWithoutUserInput
    disconnect?: UserStatWhereInput | boolean
    delete?: UserStatWhereInput | boolean
    connect?: UserStatWhereUniqueInput
    update?: XOR<XOR<UserStatUpdateToOneWithWhereWithoutUserInput, UserStatUpdateWithoutUserInput>, UserStatUncheckedUpdateWithoutUserInput>
  }

  export type GamePlayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GamePlayerCreateWithoutUserInput, GamePlayerUncheckedCreateWithoutUserInput> | GamePlayerCreateWithoutUserInput[] | GamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutUserInput | GamePlayerCreateOrConnectWithoutUserInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutUserInput | GamePlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GamePlayerCreateManyUserInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutUserInput | GamePlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutUserInput | GamePlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type UserStatUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatCreateWithoutUserInput, UserStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatCreateOrConnectWithoutUserInput
    upsert?: UserStatUpsertWithoutUserInput
    disconnect?: UserStatWhereInput | boolean
    delete?: UserStatWhereInput | boolean
    connect?: UserStatWhereUniqueInput
    update?: XOR<XOR<UserStatUpdateToOneWithWhereWithoutUserInput, UserStatUpdateWithoutUserInput>, UserStatUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type GamePlayerCreateNestedManyWithoutGameInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type GameActionCreateNestedManyWithoutGameInput = {
    create?: XOR<GameActionCreateWithoutGameInput, GameActionUncheckedCreateWithoutGameInput> | GameActionCreateWithoutGameInput[] | GameActionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameActionCreateOrConnectWithoutGameInput | GameActionCreateOrConnectWithoutGameInput[]
    createMany?: GameActionCreateManyGameInputEnvelope
    connect?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
  }

  export type GamePlayerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
  }

  export type GameActionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameActionCreateWithoutGameInput, GameActionUncheckedCreateWithoutGameInput> | GameActionCreateWithoutGameInput[] | GameActionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameActionCreateOrConnectWithoutGameInput | GameActionCreateOrConnectWithoutGameInput[]
    createMany?: GameActionCreateManyGameInputEnvelope
    connect?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GamePlayerUpdateManyWithoutGameNestedInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutGameInput | GamePlayerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutGameInput | GamePlayerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutGameInput | GamePlayerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type GameActionUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameActionCreateWithoutGameInput, GameActionUncheckedCreateWithoutGameInput> | GameActionCreateWithoutGameInput[] | GameActionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameActionCreateOrConnectWithoutGameInput | GameActionCreateOrConnectWithoutGameInput[]
    upsert?: GameActionUpsertWithWhereUniqueWithoutGameInput | GameActionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameActionCreateManyGameInputEnvelope
    set?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    disconnect?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    delete?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    connect?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    update?: GameActionUpdateWithWhereUniqueWithoutGameInput | GameActionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameActionUpdateManyWithWhereWithoutGameInput | GameActionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameActionScalarWhereInput | GameActionScalarWhereInput[]
  }

  export type GamePlayerUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput> | GamePlayerCreateWithoutGameInput[] | GamePlayerUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GamePlayerCreateOrConnectWithoutGameInput | GamePlayerCreateOrConnectWithoutGameInput[]
    upsert?: GamePlayerUpsertWithWhereUniqueWithoutGameInput | GamePlayerUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GamePlayerCreateManyGameInputEnvelope
    set?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    disconnect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    delete?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    connect?: GamePlayerWhereUniqueInput | GamePlayerWhereUniqueInput[]
    update?: GamePlayerUpdateWithWhereUniqueWithoutGameInput | GamePlayerUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GamePlayerUpdateManyWithWhereWithoutGameInput | GamePlayerUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
  }

  export type GameActionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameActionCreateWithoutGameInput, GameActionUncheckedCreateWithoutGameInput> | GameActionCreateWithoutGameInput[] | GameActionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameActionCreateOrConnectWithoutGameInput | GameActionCreateOrConnectWithoutGameInput[]
    upsert?: GameActionUpsertWithWhereUniqueWithoutGameInput | GameActionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameActionCreateManyGameInputEnvelope
    set?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    disconnect?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    delete?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    connect?: GameActionWhereUniqueInput | GameActionWhereUniqueInput[]
    update?: GameActionUpdateWithWhereUniqueWithoutGameInput | GameActionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameActionUpdateManyWithWhereWithoutGameInput | GameActionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameActionScalarWhereInput | GameActionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    upsert?: GameUpsertWithoutPlayersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlayersInput, GameUpdateWithoutPlayersInput>, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type GameCreateNestedOneWithoutActionsInput = {
    create?: XOR<GameCreateWithoutActionsInput, GameUncheckedCreateWithoutActionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutActionsInput
    connect?: GameWhereUniqueInput
  }

  export type EnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType
  }

  export type GameUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<GameCreateWithoutActionsInput, GameUncheckedCreateWithoutActionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutActionsInput
    upsert?: GameUpsertWithoutActionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutActionsInput, GameUpdateWithoutActionsInput>, GameUncheckedUpdateWithoutActionsInput>
  }

  export type LobbyPlayerCreateNestedManyWithoutLobbyInput = {
    create?: XOR<LobbyPlayerCreateWithoutLobbyInput, LobbyPlayerUncheckedCreateWithoutLobbyInput> | LobbyPlayerCreateWithoutLobbyInput[] | LobbyPlayerUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyPlayerCreateOrConnectWithoutLobbyInput | LobbyPlayerCreateOrConnectWithoutLobbyInput[]
    createMany?: LobbyPlayerCreateManyLobbyInputEnvelope
    connect?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
  }

  export type LobbyPlayerUncheckedCreateNestedManyWithoutLobbyInput = {
    create?: XOR<LobbyPlayerCreateWithoutLobbyInput, LobbyPlayerUncheckedCreateWithoutLobbyInput> | LobbyPlayerCreateWithoutLobbyInput[] | LobbyPlayerUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyPlayerCreateOrConnectWithoutLobbyInput | LobbyPlayerCreateOrConnectWithoutLobbyInput[]
    createMany?: LobbyPlayerCreateManyLobbyInputEnvelope
    connect?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
  }

  export type LobbyPlayerUpdateManyWithoutLobbyNestedInput = {
    create?: XOR<LobbyPlayerCreateWithoutLobbyInput, LobbyPlayerUncheckedCreateWithoutLobbyInput> | LobbyPlayerCreateWithoutLobbyInput[] | LobbyPlayerUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyPlayerCreateOrConnectWithoutLobbyInput | LobbyPlayerCreateOrConnectWithoutLobbyInput[]
    upsert?: LobbyPlayerUpsertWithWhereUniqueWithoutLobbyInput | LobbyPlayerUpsertWithWhereUniqueWithoutLobbyInput[]
    createMany?: LobbyPlayerCreateManyLobbyInputEnvelope
    set?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    disconnect?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    delete?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    connect?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    update?: LobbyPlayerUpdateWithWhereUniqueWithoutLobbyInput | LobbyPlayerUpdateWithWhereUniqueWithoutLobbyInput[]
    updateMany?: LobbyPlayerUpdateManyWithWhereWithoutLobbyInput | LobbyPlayerUpdateManyWithWhereWithoutLobbyInput[]
    deleteMany?: LobbyPlayerScalarWhereInput | LobbyPlayerScalarWhereInput[]
  }

  export type LobbyPlayerUncheckedUpdateManyWithoutLobbyNestedInput = {
    create?: XOR<LobbyPlayerCreateWithoutLobbyInput, LobbyPlayerUncheckedCreateWithoutLobbyInput> | LobbyPlayerCreateWithoutLobbyInput[] | LobbyPlayerUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyPlayerCreateOrConnectWithoutLobbyInput | LobbyPlayerCreateOrConnectWithoutLobbyInput[]
    upsert?: LobbyPlayerUpsertWithWhereUniqueWithoutLobbyInput | LobbyPlayerUpsertWithWhereUniqueWithoutLobbyInput[]
    createMany?: LobbyPlayerCreateManyLobbyInputEnvelope
    set?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    disconnect?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    delete?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    connect?: LobbyPlayerWhereUniqueInput | LobbyPlayerWhereUniqueInput[]
    update?: LobbyPlayerUpdateWithWhereUniqueWithoutLobbyInput | LobbyPlayerUpdateWithWhereUniqueWithoutLobbyInput[]
    updateMany?: LobbyPlayerUpdateManyWithWhereWithoutLobbyInput | LobbyPlayerUpdateManyWithWhereWithoutLobbyInput[]
    deleteMany?: LobbyPlayerScalarWhereInput | LobbyPlayerScalarWhereInput[]
  }

  export type LobbyCreateNestedOneWithoutPlayersInput = {
    create?: XOR<LobbyCreateWithoutPlayersInput, LobbyUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: LobbyCreateOrConnectWithoutPlayersInput
    connect?: LobbyWhereUniqueInput
  }

  export type LobbyUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<LobbyCreateWithoutPlayersInput, LobbyUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: LobbyCreateOrConnectWithoutPlayersInput
    upsert?: LobbyUpsertWithoutPlayersInput
    connect?: LobbyWhereUniqueInput
    update?: XOR<XOR<LobbyUpdateToOneWithWhereWithoutPlayersInput, LobbyUpdateWithoutPlayersInput>, LobbyUncheckedUpdateWithoutPlayersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[]
    notIn?: $Enums.ActionType[]
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type NestedEnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[]
    notIn?: $Enums.ActionType[]
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type GamePlayerCreateWithoutUserInput = {
    id?: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutPlayersInput
  }

  export type GamePlayerUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
  }

  export type GamePlayerCreateOrConnectWithoutUserInput = {
    where: GamePlayerWhereUniqueInput
    create: XOR<GamePlayerCreateWithoutUserInput, GamePlayerUncheckedCreateWithoutUserInput>
  }

  export type GamePlayerCreateManyUserInputEnvelope = {
    data: GamePlayerCreateManyUserInput | GamePlayerCreateManyUserInput[]
  }

  export type UserStatCreateWithoutUserInput = {
    gamesPlayed?: number
    gamesWon?: number
    totalKnockouts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatUncheckedCreateWithoutUserInput = {
    id?: number
    gamesPlayed?: number
    gamesWon?: number
    totalKnockouts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatCreateOrConnectWithoutUserInput = {
    where: UserStatWhereUniqueInput
    create: XOR<UserStatCreateWithoutUserInput, UserStatUncheckedCreateWithoutUserInput>
  }

  export type GamePlayerUpsertWithWhereUniqueWithoutUserInput = {
    where: GamePlayerWhereUniqueInput
    update: XOR<GamePlayerUpdateWithoutUserInput, GamePlayerUncheckedUpdateWithoutUserInput>
    create: XOR<GamePlayerCreateWithoutUserInput, GamePlayerUncheckedCreateWithoutUserInput>
  }

  export type GamePlayerUpdateWithWhereUniqueWithoutUserInput = {
    where: GamePlayerWhereUniqueInput
    data: XOR<GamePlayerUpdateWithoutUserInput, GamePlayerUncheckedUpdateWithoutUserInput>
  }

  export type GamePlayerUpdateManyWithWhereWithoutUserInput = {
    where: GamePlayerScalarWhereInput
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyWithoutUserInput>
  }

  export type GamePlayerScalarWhereInput = {
    AND?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
    OR?: GamePlayerScalarWhereInput[]
    NOT?: GamePlayerScalarWhereInput | GamePlayerScalarWhereInput[]
    id?: StringFilter<"GamePlayer"> | string
    gameId?: StringFilter<"GamePlayer"> | string
    userId?: StringFilter<"GamePlayer"> | string
    position?: IntFilter<"GamePlayer"> | number
    cards?: StringFilter<"GamePlayer"> | string
    isKnockedOut?: BoolFilter<"GamePlayer"> | boolean
    calledUno?: BoolFilter<"GamePlayer"> | boolean
    createdAt?: DateTimeFilter<"GamePlayer"> | Date | string
  }

  export type UserStatUpsertWithoutUserInput = {
    update: XOR<UserStatUpdateWithoutUserInput, UserStatUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatCreateWithoutUserInput, UserStatUncheckedCreateWithoutUserInput>
    where?: UserStatWhereInput
  }

  export type UserStatUpdateToOneWithWhereWithoutUserInput = {
    where?: UserStatWhereInput
    data: XOR<UserStatUpdateWithoutUserInput, UserStatUncheckedUpdateWithoutUserInput>
  }

  export type UserStatUpdateWithoutUserInput = {
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalKnockouts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesWon?: IntFieldUpdateOperationsInput | number
    totalKnockouts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutStatsInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GamePlayerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatsInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GamePlayerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
  }

  export type UserUpsertWithoutStatsInput = {
    update: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GamePlayerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GamePlayerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GamePlayerCreateWithoutGameInput = {
    id?: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GamePlayerUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
  }

  export type GamePlayerCreateOrConnectWithoutGameInput = {
    where: GamePlayerWhereUniqueInput
    create: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput>
  }

  export type GamePlayerCreateManyGameInputEnvelope = {
    data: GamePlayerCreateManyGameInput | GamePlayerCreateManyGameInput[]
  }

  export type GameActionCreateWithoutGameInput = {
    id?: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed?: string | null
    cardsDrawn?: number
    targetId?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type GameActionUncheckedCreateWithoutGameInput = {
    id?: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed?: string | null
    cardsDrawn?: number
    targetId?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type GameActionCreateOrConnectWithoutGameInput = {
    where: GameActionWhereUniqueInput
    create: XOR<GameActionCreateWithoutGameInput, GameActionUncheckedCreateWithoutGameInput>
  }

  export type GameActionCreateManyGameInputEnvelope = {
    data: GameActionCreateManyGameInput | GameActionCreateManyGameInput[]
  }

  export type GamePlayerUpsertWithWhereUniqueWithoutGameInput = {
    where: GamePlayerWhereUniqueInput
    update: XOR<GamePlayerUpdateWithoutGameInput, GamePlayerUncheckedUpdateWithoutGameInput>
    create: XOR<GamePlayerCreateWithoutGameInput, GamePlayerUncheckedCreateWithoutGameInput>
  }

  export type GamePlayerUpdateWithWhereUniqueWithoutGameInput = {
    where: GamePlayerWhereUniqueInput
    data: XOR<GamePlayerUpdateWithoutGameInput, GamePlayerUncheckedUpdateWithoutGameInput>
  }

  export type GamePlayerUpdateManyWithWhereWithoutGameInput = {
    where: GamePlayerScalarWhereInput
    data: XOR<GamePlayerUpdateManyMutationInput, GamePlayerUncheckedUpdateManyWithoutGameInput>
  }

  export type GameActionUpsertWithWhereUniqueWithoutGameInput = {
    where: GameActionWhereUniqueInput
    update: XOR<GameActionUpdateWithoutGameInput, GameActionUncheckedUpdateWithoutGameInput>
    create: XOR<GameActionCreateWithoutGameInput, GameActionUncheckedCreateWithoutGameInput>
  }

  export type GameActionUpdateWithWhereUniqueWithoutGameInput = {
    where: GameActionWhereUniqueInput
    data: XOR<GameActionUpdateWithoutGameInput, GameActionUncheckedUpdateWithoutGameInput>
  }

  export type GameActionUpdateManyWithWhereWithoutGameInput = {
    where: GameActionScalarWhereInput
    data: XOR<GameActionUpdateManyMutationInput, GameActionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameActionScalarWhereInput = {
    AND?: GameActionScalarWhereInput | GameActionScalarWhereInput[]
    OR?: GameActionScalarWhereInput[]
    NOT?: GameActionScalarWhereInput | GameActionScalarWhereInput[]
    id?: StringFilter<"GameAction"> | string
    gameId?: StringFilter<"GameAction"> | string
    playerId?: StringFilter<"GameAction"> | string
    type?: EnumActionTypeFilter<"GameAction"> | $Enums.ActionType
    cardPlayed?: StringNullableFilter<"GameAction"> | string | null
    cardsDrawn?: IntFilter<"GameAction"> | number
    targetId?: StringNullableFilter<"GameAction"> | string | null
    color?: StringNullableFilter<"GameAction"> | string | null
    createdAt?: DateTimeFilter<"GameAction"> | Date | string
  }

  export type GameCreateWithoutPlayersInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    actions?: GameActionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayersInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    actions?: GameActionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type UserCreateWithoutGamesInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    email?: string | null
    password?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: UserStatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type GameUpsertWithoutPlayersInput = {
    update: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlayersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actions?: GameActionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actions?: GameActionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: UserStatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GameCreateWithoutActionsInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    players?: GamePlayerCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutActionsInput = {
    id?: string
    status?: $Enums.GameStatus
    maxPlayers?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    players?: GamePlayerUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutActionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutActionsInput, GameUncheckedCreateWithoutActionsInput>
  }

  export type GameUpsertWithoutActionsInput = {
    update: XOR<GameUpdateWithoutActionsInput, GameUncheckedUpdateWithoutActionsInput>
    create: XOR<GameCreateWithoutActionsInput, GameUncheckedCreateWithoutActionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutActionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutActionsInput, GameUncheckedUpdateWithoutActionsInput>
  }

  export type GameUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: GamePlayerUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: GamePlayerUncheckedUpdateManyWithoutGameNestedInput
  }

  export type LobbyPlayerCreateWithoutLobbyInput = {
    id?: string
    userId: string
    position: number
    createdAt?: Date | string
  }

  export type LobbyPlayerUncheckedCreateWithoutLobbyInput = {
    id?: string
    userId: string
    position: number
    createdAt?: Date | string
  }

  export type LobbyPlayerCreateOrConnectWithoutLobbyInput = {
    where: LobbyPlayerWhereUniqueInput
    create: XOR<LobbyPlayerCreateWithoutLobbyInput, LobbyPlayerUncheckedCreateWithoutLobbyInput>
  }

  export type LobbyPlayerCreateManyLobbyInputEnvelope = {
    data: LobbyPlayerCreateManyLobbyInput | LobbyPlayerCreateManyLobbyInput[]
  }

  export type LobbyPlayerUpsertWithWhereUniqueWithoutLobbyInput = {
    where: LobbyPlayerWhereUniqueInput
    update: XOR<LobbyPlayerUpdateWithoutLobbyInput, LobbyPlayerUncheckedUpdateWithoutLobbyInput>
    create: XOR<LobbyPlayerCreateWithoutLobbyInput, LobbyPlayerUncheckedCreateWithoutLobbyInput>
  }

  export type LobbyPlayerUpdateWithWhereUniqueWithoutLobbyInput = {
    where: LobbyPlayerWhereUniqueInput
    data: XOR<LobbyPlayerUpdateWithoutLobbyInput, LobbyPlayerUncheckedUpdateWithoutLobbyInput>
  }

  export type LobbyPlayerUpdateManyWithWhereWithoutLobbyInput = {
    where: LobbyPlayerScalarWhereInput
    data: XOR<LobbyPlayerUpdateManyMutationInput, LobbyPlayerUncheckedUpdateManyWithoutLobbyInput>
  }

  export type LobbyPlayerScalarWhereInput = {
    AND?: LobbyPlayerScalarWhereInput | LobbyPlayerScalarWhereInput[]
    OR?: LobbyPlayerScalarWhereInput[]
    NOT?: LobbyPlayerScalarWhereInput | LobbyPlayerScalarWhereInput[]
    id?: StringFilter<"LobbyPlayer"> | string
    lobbyId?: StringFilter<"LobbyPlayer"> | string
    userId?: StringFilter<"LobbyPlayer"> | string
    position?: IntFilter<"LobbyPlayer"> | number
    createdAt?: DateTimeFilter<"LobbyPlayer"> | Date | string
  }

  export type LobbyCreateWithoutPlayersInput = {
    id?: string
    code: string
    createdBy: string
    status?: $Enums.GameStatus
    createdAt?: Date | string
  }

  export type LobbyUncheckedCreateWithoutPlayersInput = {
    id?: string
    code: string
    createdBy: string
    status?: $Enums.GameStatus
    createdAt?: Date | string
  }

  export type LobbyCreateOrConnectWithoutPlayersInput = {
    where: LobbyWhereUniqueInput
    create: XOR<LobbyCreateWithoutPlayersInput, LobbyUncheckedCreateWithoutPlayersInput>
  }

  export type LobbyUpsertWithoutPlayersInput = {
    update: XOR<LobbyUpdateWithoutPlayersInput, LobbyUncheckedUpdateWithoutPlayersInput>
    create: XOR<LobbyCreateWithoutPlayersInput, LobbyUncheckedCreateWithoutPlayersInput>
    where?: LobbyWhereInput
  }

  export type LobbyUpdateToOneWithWhereWithoutPlayersInput = {
    where?: LobbyWhereInput
    data: XOR<LobbyUpdateWithoutPlayersInput, LobbyUncheckedUpdateWithoutPlayersInput>
  }

  export type LobbyUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerCreateManyUserInput = {
    id?: string
    gameId: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
  }

  export type GamePlayerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type GamePlayerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerCreateManyGameInput = {
    id?: string
    userId: string
    position: number
    cards?: string
    isKnockedOut?: boolean
    calledUno?: boolean
    createdAt?: Date | string
  }

  export type GameActionCreateManyGameInput = {
    id?: string
    playerId: string
    type: $Enums.ActionType
    cardPlayed?: string | null
    cardsDrawn?: number
    targetId?: string | null
    color?: string | null
    createdAt?: Date | string
  }

  export type GamePlayerUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GamePlayerUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamePlayerUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    cards?: StringFieldUpdateOperationsInput | string
    isKnockedOut?: BoolFieldUpdateOperationsInput | boolean
    calledUno?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameActionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameActionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameActionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    cardPlayed?: NullableStringFieldUpdateOperationsInput | string | null
    cardsDrawn?: IntFieldUpdateOperationsInput | number
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyPlayerCreateManyLobbyInput = {
    id?: string
    userId: string
    position: number
    createdAt?: Date | string
  }

  export type LobbyPlayerUpdateWithoutLobbyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyPlayerUncheckedUpdateWithoutLobbyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyPlayerUncheckedUpdateManyWithoutLobbyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}