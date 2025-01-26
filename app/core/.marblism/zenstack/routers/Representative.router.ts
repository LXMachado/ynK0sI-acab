/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.RepresentativeInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).representative.createMany(input as any))),

        create: procedure.input($Schema.RepresentativeInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).representative.create(input as any))),

        deleteMany: procedure.input($Schema.RepresentativeInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).representative.deleteMany(input as any))),

        delete: procedure.input($Schema.RepresentativeInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).representative.delete(input as any))),

        findFirst: procedure.input($Schema.RepresentativeInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).representative.findFirst(input as any))),

        findMany: procedure.input($Schema.RepresentativeInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).representative.findMany(input as any))),

        findUnique: procedure.input($Schema.RepresentativeInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).representative.findUnique(input as any))),

        updateMany: procedure.input($Schema.RepresentativeInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).representative.updateMany(input as any))),

        update: procedure.input($Schema.RepresentativeInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).representative.update(input as any))),

        count: procedure.input($Schema.RepresentativeInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).representative.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RepresentativeCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RepresentativeCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RepresentativeCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RepresentativeCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RepresentativeCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RepresentativeCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RepresentativeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RepresentativeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RepresentativeCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RepresentativeCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RepresentativeGetPayload<T>, Context>) => Promise<Prisma.RepresentativeGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RepresentativeDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RepresentativeDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RepresentativeDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RepresentativeDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RepresentativeDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RepresentativeDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RepresentativeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RepresentativeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RepresentativeDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RepresentativeDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RepresentativeGetPayload<T>, Context>) => Promise<Prisma.RepresentativeGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RepresentativeFindFirstArgs, TData = Prisma.RepresentativeGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.RepresentativeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RepresentativeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RepresentativeFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RepresentativeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RepresentativeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RepresentativeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RepresentativeFindManyArgs, TData = Array<Prisma.RepresentativeGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.RepresentativeFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RepresentativeGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RepresentativeFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RepresentativeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RepresentativeGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RepresentativeGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RepresentativeFindUniqueArgs, TData = Prisma.RepresentativeGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RepresentativeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RepresentativeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RepresentativeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RepresentativeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RepresentativeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RepresentativeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RepresentativeUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RepresentativeUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RepresentativeUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RepresentativeUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RepresentativeUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RepresentativeUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RepresentativeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RepresentativeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RepresentativeUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RepresentativeUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RepresentativeGetPayload<T>, Context>) => Promise<Prisma.RepresentativeGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.RepresentativeCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RepresentativeCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.RepresentativeCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RepresentativeCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.RepresentativeCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.RepresentativeCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RepresentativeCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RepresentativeCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
