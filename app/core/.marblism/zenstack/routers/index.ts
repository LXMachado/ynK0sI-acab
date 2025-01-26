/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createDepartmentRouter from "./Department.router";
import createClientRouter from "./Client.router";
import createInstallationTeamRouter from "./InstallationTeam.router";
import createTeamMemberRouter from "./TeamMember.router";
import createRepresentativeRouter from "./Representative.router";
import createJobRouter from "./Job.router";
import createWorksheetRouter from "./Worksheet.router";
import createStockRouter from "./Stock.router";
import createScheduleRouter from "./Schedule.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as DepartmentClientType } from "./Department.router";
import { ClientType as ClientClientType } from "./Client.router";
import { ClientType as InstallationTeamClientType } from "./InstallationTeam.router";
import { ClientType as TeamMemberClientType } from "./TeamMember.router";
import { ClientType as RepresentativeClientType } from "./Representative.router";
import { ClientType as JobClientType } from "./Job.router";
import { ClientType as WorksheetClientType } from "./Worksheet.router";
import { ClientType as StockClientType } from "./Stock.router";
import { ClientType as ScheduleClientType } from "./Schedule.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        department: createDepartmentRouter(router, procedure),
        client: createClientRouter(router, procedure),
        installationTeam: createInstallationTeamRouter(router, procedure),
        teamMember: createTeamMemberRouter(router, procedure),
        representative: createRepresentativeRouter(router, procedure),
        job: createJobRouter(router, procedure),
        worksheet: createWorksheetRouter(router, procedure),
        stock: createStockRouter(router, procedure),
        schedule: createScheduleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    department: DepartmentClientType<AppRouter>;
    client: ClientClientType<AppRouter>;
    installationTeam: InstallationTeamClientType<AppRouter>;
    teamMember: TeamMemberClientType<AppRouter>;
    representative: RepresentativeClientType<AppRouter>;
    job: JobClientType<AppRouter>;
    worksheet: WorksheetClientType<AppRouter>;
    stock: StockClientType<AppRouter>;
    schedule: ScheduleClientType<AppRouter>;
}
