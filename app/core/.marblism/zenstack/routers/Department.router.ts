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

        createMany: procedure.input($Schema.DepartmentInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).department.createMany(input as any))),

        create: procedure.input($Schema.DepartmentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).department.create(input as any))),

        deleteMany: procedure.input($Schema.DepartmentInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).department.deleteMany(input as any))),

        delete: procedure.input($Schema.DepartmentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).department.delete(input as any))),

        findFirst: procedure.input($Schema.DepartmentInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).department.findFirst(input as any))),

        findMany: procedure.input($Schema.DepartmentInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).department.findMany(input as any))),

        findUnique: procedure.input($Schema.DepartmentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).department.findUnique(input as any))),

        updateMany: procedure.input($Schema.DepartmentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).department.updateMany(input as any))),

        update: procedure.input($Schema.DepartmentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).department.update(input as any))),

        count: procedure.input($Schema.DepartmentInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).department.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DepartmentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DepartmentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DepartmentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DepartmentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DepartmentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DepartmentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DepartmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DepartmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DepartmentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DepartmentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DepartmentGetPayload<T>, Context>) => Promise<Prisma.DepartmentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DepartmentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DepartmentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DepartmentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DepartmentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DepartmentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DepartmentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DepartmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DepartmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DepartmentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DepartmentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DepartmentGetPayload<T>, Context>) => Promise<Prisma.DepartmentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DepartmentFindFirstArgs, TData = Prisma.DepartmentGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.DepartmentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DepartmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DepartmentFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DepartmentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DepartmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DepartmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DepartmentFindManyArgs, TData = Array<Prisma.DepartmentGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.DepartmentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DepartmentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DepartmentFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DepartmentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DepartmentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DepartmentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DepartmentFindUniqueArgs, TData = Prisma.DepartmentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DepartmentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DepartmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DepartmentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DepartmentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DepartmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DepartmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DepartmentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DepartmentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DepartmentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DepartmentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DepartmentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DepartmentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DepartmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DepartmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DepartmentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DepartmentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DepartmentGetPayload<T>, Context>) => Promise<Prisma.DepartmentGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.DepartmentCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DepartmentCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.DepartmentCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.DepartmentCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DepartmentCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.DepartmentCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.DepartmentCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DepartmentCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
