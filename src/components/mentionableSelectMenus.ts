import {
    MentionableSelectMenuBuilder as MentionableBuilder,
    RoleSelectMenuBuilder as RoleBuilder,
    UserSelectMenuBuilder as UserBuilder,
    RestOrArray,
    normalizeArray
} from '@discordjs/builders';
import type { APISelectMenuDefaultValue, SelectMenuDefaultValueType, Snowflake } from 'discord-api-types/v10';
import { BaseKeyMixin, BuilderMixin, SelectMenu } from 'mixins';
import { mix } from 'ts-mixer';

export interface MentionableSelectMenuBuilder
    extends BuilderMixin<MentionableBuilder>,
        BaseKeyMixin,
        SelectMenu<MentionableBuilder> {}

@mix(BuilderMixin, BaseKeyMixin, SelectMenu)
export class MentionableSelectMenuBuilder {
    constructor(baseKey?: string) {
        this.builder = new MentionableBuilder();
    }

    addDefaultRoles(...roles: RestOrArray<Snowflake>) {
        this.builder.addDefaultRoles(normalizeArray(roles));
        return this;
    }

    addDefaultUsers(...users: RestOrArray<Snowflake>) {
        this.builder.addDefaultUsers(normalizeArray(users));
        return this;
    }

    addDefaultValues(
        ...values: RestOrArray<
            | APISelectMenuDefaultValue<SelectMenuDefaultValueType.Role>
            | APISelectMenuDefaultValue<SelectMenuDefaultValueType.User>
        >
    ) {
        this.builder.addDefaultValues(normalizeArray(values));
        return this;
    }

    setDefaultValues(
        ...values: RestOrArray<
            | APISelectMenuDefaultValue<SelectMenuDefaultValueType.Role>
            | APISelectMenuDefaultValue<SelectMenuDefaultValueType.User>
        >
    ) {
        this.builder.setDefaultValues(normalizeArray(values));
        return this;
    }
}

export interface RoleSelectMenuBuilder extends BuilderMixin<RoleBuilder>, BaseKeyMixin, SelectMenu<RoleBuilder> {}

@mix(BuilderMixin, BaseKeyMixin, SelectMenu)
export class RoleSelectMenuBuilder {
    constructor(baseKey?: string) {
        this.builder = new RoleBuilder();
    }

    addDefaultRoles(...roles: RestOrArray<Snowflake>) {
        this.builder.addDefaultRoles(normalizeArray(roles));
        return this;
    }

    setDefaultRoles(...roles: RestOrArray<Snowflake>) {
        this.builder.setDefaultRoles(normalizeArray(roles));
        return this;
    }
}

export interface UserSelectMenuBuilder extends BuilderMixin<UserBuilder>, BaseKeyMixin, SelectMenu<UserBuilder> {}

@mix(BuilderMixin, BaseKeyMixin, SelectMenu)
export class UserSelectMenuBuilder {
    constructor(baseKey?: string) {
        this.builder = new UserBuilder();
    }

    addDefaultUsers(...roles: RestOrArray<Snowflake>) {
        this.builder.addDefaultUsers(normalizeArray(roles));
        return this;
    }

    setDefaultUsers(...roles: RestOrArray<Snowflake>) {
        this.builder.setDefaultUsers(normalizeArray(roles));
        return this;
    }
}
