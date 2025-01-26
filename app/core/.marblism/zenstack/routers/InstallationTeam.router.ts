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

        createMany: procedure.input($Schema.InstallationTeamInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).installationTeam.createMany(input as any))),

        create: procedure.input($Schema.InstallationTeamInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).installationTeam.create(input as any))),

        deleteMany: procedure.input($Schema.InstallationTeamInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).installationTeam.deleteMany(input as any))),

        delete: procedure.input($Schema.InstallationTeamInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).installationTeam.delete(input as any))),

        findFirst: procedure.input($Schema.InstallationTeamInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).installationTeam.findFirst(input as any))),

        findMany: procedure.input($Schema.InstallationTeamInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).installationTeam.findMany(input as any))),

        findUnique: procedure.input($Schema.InstallationTeamInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).installationTeam.findUnique(input as any))),

        updateMany: procedure.input($Schema.InstallationTeamInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).installationTeam.updateMany(input as any))),

        update: procedure.input($Schema.InstallationTeamInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).installationTeam.update(input as any))),

        count: procedure.input($Schema.InstallationTeamInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).installationTeam.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.InstallationTeamCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstallationTeamCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstallationTeamCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstallationTeamCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.InstallationTeamCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstallationTeamCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InstallationTeamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InstallationTeamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstallationTeamCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstallationTeamCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InstallationTeamGetPayload<T>, Context>) => Promise<Prisma.InstallationTeamGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.InstallationTeamDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstallationTeamDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstallationTeamDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstallationTeamDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.InstallationTeamDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstallationTeamDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InstallationTeamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InstallationTeamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstallationTeamDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstallationTeamDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InstallationTeamGetPayload<T>, Context>) => Promise<Prisma.InstallationTeamGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.InstallationTeamFindFirstArgs, TData = Prisma.InstallationTeamGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.InstallationTeamFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InstallationTeamGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InstallationTeamFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.InstallationTeamFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InstallationTeamGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InstallationTeamGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.InstallationTeamFindManyArgs, TData = Array<Prisma.InstallationTeamGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.InstallationTeamFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.InstallationTeamGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InstallationTeamFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.InstallationTeamFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.InstallationTeamGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.InstallationTeamGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.InstallationTeamFindUniqueArgs, TData = Prisma.InstallationTeamGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InstallationTeamFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InstallationTeamGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InstallationTeamFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InstallationTeamFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InstallationTeamGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InstallationTeamGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.InstallationTeamUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstallationTeamUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstallationTeamUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstallationTeamUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.InstallationTeamUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstallationTeamUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InstallationTeamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InstallationTeamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstallationTeamUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstallationTeamUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InstallationTeamGetPayload<T>, Context>) => Promise<Prisma.InstallationTeamGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.InstallationTeamCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.InstallationTeamCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.InstallationTeamCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.InstallationTeamCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.InstallationTeamCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.InstallationTeamCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.InstallationTeamCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.InstallationTeamCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
