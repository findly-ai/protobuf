import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace conversation. */
export namespace conversation {

    /** Properties of an AppConversation. */
    interface IAppConversation {

        /** AppConversation slackConversation */
        slackConversation?: (conversation.ISlackConversation|null);

        /** AppConversation dashboardConversation */
        dashboardConversation?: (conversation.IDashboardConversation|null);
    }

    /** Represents an AppConversation. */
    class AppConversation implements IAppConversation {

        /**
         * Constructs a new AppConversation.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IAppConversation);

        /** AppConversation slackConversation. */
        public slackConversation?: (conversation.ISlackConversation|null);

        /** AppConversation dashboardConversation. */
        public dashboardConversation?: (conversation.IDashboardConversation|null);

        /** AppConversation conversation. */
        public conversation?: ("slackConversation"|"dashboardConversation");

        /**
         * Creates a new AppConversation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppConversation instance
         */
        public static create(properties?: conversation.IAppConversation): conversation.AppConversation;

        /**
         * Encodes the specified AppConversation message. Does not implicitly {@link conversation.AppConversation.verify|verify} messages.
         * @param message AppConversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IAppConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppConversation message, length delimited. Does not implicitly {@link conversation.AppConversation.verify|verify} messages.
         * @param message AppConversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IAppConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppConversation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.AppConversation;

        /**
         * Decodes an AppConversation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.AppConversation;

        /**
         * Verifies an AppConversation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppConversation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppConversation
         */
        public static fromObject(object: { [k: string]: any }): conversation.AppConversation;

        /**
         * Creates a plain object from an AppConversation message. Also converts values to other types if specified.
         * @param message AppConversation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.AppConversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppConversation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AppConversation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SlackConversation. */
    interface ISlackConversation {

        /** SlackConversation conversation */
        conversation?: (conversation.IConversation|null);

        /** SlackConversation channelId */
        channelId?: (string|null);

        /** SlackConversation teamId */
        teamId?: (string|null);

        /** SlackConversation threadId */
        threadId?: (string|null);

        /** SlackConversation eventId */
        eventId?: (string|null);
    }

    /** Represents a SlackConversation. */
    class SlackConversation implements ISlackConversation {

        /**
         * Constructs a new SlackConversation.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.ISlackConversation);

        /** SlackConversation conversation. */
        public conversation?: (conversation.IConversation|null);

        /** SlackConversation channelId. */
        public channelId: string;

        /** SlackConversation teamId. */
        public teamId: string;

        /** SlackConversation threadId. */
        public threadId: string;

        /** SlackConversation eventId. */
        public eventId: string;

        /**
         * Creates a new SlackConversation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlackConversation instance
         */
        public static create(properties?: conversation.ISlackConversation): conversation.SlackConversation;

        /**
         * Encodes the specified SlackConversation message. Does not implicitly {@link conversation.SlackConversation.verify|verify} messages.
         * @param message SlackConversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.ISlackConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlackConversation message, length delimited. Does not implicitly {@link conversation.SlackConversation.verify|verify} messages.
         * @param message SlackConversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.ISlackConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlackConversation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlackConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.SlackConversation;

        /**
         * Decodes a SlackConversation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlackConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.SlackConversation;

        /**
         * Verifies a SlackConversation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlackConversation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlackConversation
         */
        public static fromObject(object: { [k: string]: any }): conversation.SlackConversation;

        /**
         * Creates a plain object from a SlackConversation message. Also converts values to other types if specified.
         * @param message SlackConversation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.SlackConversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlackConversation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SlackConversation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DashboardConversation. */
    interface IDashboardConversation {

        /** DashboardConversation conversation */
        conversation?: (conversation.IConversation|null);
    }

    /** Represents a DashboardConversation. */
    class DashboardConversation implements IDashboardConversation {

        /**
         * Constructs a new DashboardConversation.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IDashboardConversation);

        /** DashboardConversation conversation. */
        public conversation?: (conversation.IConversation|null);

        /**
         * Creates a new DashboardConversation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DashboardConversation instance
         */
        public static create(properties?: conversation.IDashboardConversation): conversation.DashboardConversation;

        /**
         * Encodes the specified DashboardConversation message. Does not implicitly {@link conversation.DashboardConversation.verify|verify} messages.
         * @param message DashboardConversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IDashboardConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DashboardConversation message, length delimited. Does not implicitly {@link conversation.DashboardConversation.verify|verify} messages.
         * @param message DashboardConversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IDashboardConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DashboardConversation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DashboardConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.DashboardConversation;

        /**
         * Decodes a DashboardConversation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DashboardConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.DashboardConversation;

        /**
         * Verifies a DashboardConversation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DashboardConversation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DashboardConversation
         */
        public static fromObject(object: { [k: string]: any }): conversation.DashboardConversation;

        /**
         * Creates a plain object from a DashboardConversation message. Also converts values to other types if specified.
         * @param message DashboardConversation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.DashboardConversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DashboardConversation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DashboardConversation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Conversation. */
    interface IConversation {

        /** Conversation id */
        id?: (string|null);

        /** Conversation workspace */
        workspace?: (string|null);

        /** Conversation timestamp */
        timestamp?: (number|null);

        /** Conversation lastUpdated */
        lastUpdated?: (number|null);

        /** Conversation messages */
        messages?: (conversation.IMessage[]|null);

        /** Conversation startedByEmail */
        startedByEmail?: (string|null);
    }

    /** Represents a Conversation. */
    class Conversation implements IConversation {

        /**
         * Constructs a new Conversation.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IConversation);

        /** Conversation id. */
        public id: string;

        /** Conversation workspace. */
        public workspace: string;

        /** Conversation timestamp. */
        public timestamp: number;

        /** Conversation lastUpdated. */
        public lastUpdated: number;

        /** Conversation messages. */
        public messages: conversation.IMessage[];

        /** Conversation startedByEmail. */
        public startedByEmail: string;

        /**
         * Creates a new Conversation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Conversation instance
         */
        public static create(properties?: conversation.IConversation): conversation.Conversation;

        /**
         * Encodes the specified Conversation message. Does not implicitly {@link conversation.Conversation.verify|verify} messages.
         * @param message Conversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Conversation message, length delimited. Does not implicitly {@link conversation.Conversation.verify|verify} messages.
         * @param message Conversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Conversation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Conversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.Conversation;

        /**
         * Decodes a Conversation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Conversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.Conversation;

        /**
         * Verifies a Conversation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Conversation
         */
        public static fromObject(object: { [k: string]: any }): conversation.Conversation;

        /**
         * Creates a plain object from a Conversation message. Also converts values to other types if specified.
         * @param message Conversation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.Conversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Conversation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Conversation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConversationGeneratedSQLInformation. */
    interface IConversationGeneratedSQLInformation {

        /** ConversationGeneratedSQLInformation id */
        id?: (string|null);

        /** ConversationGeneratedSQLInformation mainTableName */
        mainTableName?: (string|null);

        /** ConversationGeneratedSQLInformation mainTableScore */
        mainTableScore?: (number|null);

        /** ConversationGeneratedSQLInformation megaTableSchema */
        megaTableSchema?: (conversation.IMegaTableSchema|null);

        /** ConversationGeneratedSQLInformation generatedSqlQueryParts */
        generatedSqlQueryParts?: (conversation.IGeneratedSQLQueryParts|null);

        /** ConversationGeneratedSQLInformation answerScore */
        answerScore?: (number|null);
    }

    /** Represents a ConversationGeneratedSQLInformation. */
    class ConversationGeneratedSQLInformation implements IConversationGeneratedSQLInformation {

        /**
         * Constructs a new ConversationGeneratedSQLInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IConversationGeneratedSQLInformation);

        /** ConversationGeneratedSQLInformation id. */
        public id: string;

        /** ConversationGeneratedSQLInformation mainTableName. */
        public mainTableName: string;

        /** ConversationGeneratedSQLInformation mainTableScore. */
        public mainTableScore: number;

        /** ConversationGeneratedSQLInformation megaTableSchema. */
        public megaTableSchema?: (conversation.IMegaTableSchema|null);

        /** ConversationGeneratedSQLInformation generatedSqlQueryParts. */
        public generatedSqlQueryParts?: (conversation.IGeneratedSQLQueryParts|null);

        /** ConversationGeneratedSQLInformation answerScore. */
        public answerScore: number;

        /**
         * Creates a new ConversationGeneratedSQLInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConversationGeneratedSQLInformation instance
         */
        public static create(properties?: conversation.IConversationGeneratedSQLInformation): conversation.ConversationGeneratedSQLInformation;

        /**
         * Encodes the specified ConversationGeneratedSQLInformation message. Does not implicitly {@link conversation.ConversationGeneratedSQLInformation.verify|verify} messages.
         * @param message ConversationGeneratedSQLInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IConversationGeneratedSQLInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConversationGeneratedSQLInformation message, length delimited. Does not implicitly {@link conversation.ConversationGeneratedSQLInformation.verify|verify} messages.
         * @param message ConversationGeneratedSQLInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IConversationGeneratedSQLInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConversationGeneratedSQLInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConversationGeneratedSQLInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.ConversationGeneratedSQLInformation;

        /**
         * Decodes a ConversationGeneratedSQLInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConversationGeneratedSQLInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.ConversationGeneratedSQLInformation;

        /**
         * Verifies a ConversationGeneratedSQLInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConversationGeneratedSQLInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConversationGeneratedSQLInformation
         */
        public static fromObject(object: { [k: string]: any }): conversation.ConversationGeneratedSQLInformation;

        /**
         * Creates a plain object from a ConversationGeneratedSQLInformation message. Also converts values to other types if specified.
         * @param message ConversationGeneratedSQLInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.ConversationGeneratedSQLInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConversationGeneratedSQLInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConversationGeneratedSQLInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GeneratedSQLQueryParts. */
    interface IGeneratedSQLQueryParts {

        /** GeneratedSQLQueryParts megaTableWithStatement */
        megaTableWithStatement?: (string|null);

        /** GeneratedSQLQueryParts megaTableAggregatedWithStatement */
        megaTableAggregatedWithStatement?: (string|null);

        /** GeneratedSQLQueryParts generatedSql */
        generatedSql?: (string|null);

        /** GeneratedSQLQueryParts generatedSqlWithoutMegatableSchema */
        generatedSqlWithoutMegatableSchema?: (string|null);

        /** GeneratedSQLQueryParts whereClause */
        whereClause?: (string|null);

        /** GeneratedSQLQueryParts groupByColumns */
        groupByColumns?: (string[]|null);

        /** GeneratedSQLQueryParts metricsExpression */
        metricsExpression?: (string[]|null);

        /** GeneratedSQLQueryParts limit */
        limit?: (string|null);

        /** GeneratedSQLQueryParts orderBy */
        orderBy?: (string|null);
    }

    /** Represents a GeneratedSQLQueryParts. */
    class GeneratedSQLQueryParts implements IGeneratedSQLQueryParts {

        /**
         * Constructs a new GeneratedSQLQueryParts.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IGeneratedSQLQueryParts);

        /** GeneratedSQLQueryParts megaTableWithStatement. */
        public megaTableWithStatement: string;

        /** GeneratedSQLQueryParts megaTableAggregatedWithStatement. */
        public megaTableAggregatedWithStatement: string;

        /** GeneratedSQLQueryParts generatedSql. */
        public generatedSql: string;

        /** GeneratedSQLQueryParts generatedSqlWithoutMegatableSchema. */
        public generatedSqlWithoutMegatableSchema: string;

        /** GeneratedSQLQueryParts whereClause. */
        public whereClause: string;

        /** GeneratedSQLQueryParts groupByColumns. */
        public groupByColumns: string[];

        /** GeneratedSQLQueryParts metricsExpression. */
        public metricsExpression: string[];

        /** GeneratedSQLQueryParts limit. */
        public limit: string;

        /** GeneratedSQLQueryParts orderBy. */
        public orderBy: string;

        /**
         * Creates a new GeneratedSQLQueryParts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GeneratedSQLQueryParts instance
         */
        public static create(properties?: conversation.IGeneratedSQLQueryParts): conversation.GeneratedSQLQueryParts;

        /**
         * Encodes the specified GeneratedSQLQueryParts message. Does not implicitly {@link conversation.GeneratedSQLQueryParts.verify|verify} messages.
         * @param message GeneratedSQLQueryParts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IGeneratedSQLQueryParts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GeneratedSQLQueryParts message, length delimited. Does not implicitly {@link conversation.GeneratedSQLQueryParts.verify|verify} messages.
         * @param message GeneratedSQLQueryParts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IGeneratedSQLQueryParts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GeneratedSQLQueryParts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeneratedSQLQueryParts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.GeneratedSQLQueryParts;

        /**
         * Decodes a GeneratedSQLQueryParts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GeneratedSQLQueryParts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.GeneratedSQLQueryParts;

        /**
         * Verifies a GeneratedSQLQueryParts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GeneratedSQLQueryParts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneratedSQLQueryParts
         */
        public static fromObject(object: { [k: string]: any }): conversation.GeneratedSQLQueryParts;

        /**
         * Creates a plain object from a GeneratedSQLQueryParts message. Also converts values to other types if specified.
         * @param message GeneratedSQLQueryParts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.GeneratedSQLQueryParts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneratedSQLQueryParts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GeneratedSQLQueryParts
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MegaTableSchema. */
    interface IMegaTableSchema {

        /** MegaTableSchema name */
        name?: (string|null);

        /** MegaTableSchema columns */
        columns?: (conversation.IMegaTableSchemaColumn[]|null);

        /** MegaTableSchema megaTableWithStatement */
        megaTableWithStatement?: (string|null);

        /** MegaTableSchema tableInformation */
        tableInformation?: (conversation.IMegaTableIndividualTableInformation[]|null);

        /** MegaTableSchema baseTableName */
        baseTableName?: (string|null);

        /** MegaTableSchema allColumnsInTable */
        allColumnsInTable?: (conversation.IMegaTableSchemaColumn[]|null);
    }

    /** Represents a MegaTableSchema. */
    class MegaTableSchema implements IMegaTableSchema {

        /**
         * Constructs a new MegaTableSchema.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IMegaTableSchema);

        /** MegaTableSchema name. */
        public name: string;

        /** MegaTableSchema columns. */
        public columns: conversation.IMegaTableSchemaColumn[];

        /** MegaTableSchema megaTableWithStatement. */
        public megaTableWithStatement: string;

        /** MegaTableSchema tableInformation. */
        public tableInformation: conversation.IMegaTableIndividualTableInformation[];

        /** MegaTableSchema baseTableName. */
        public baseTableName: string;

        /** MegaTableSchema allColumnsInTable. */
        public allColumnsInTable: conversation.IMegaTableSchemaColumn[];

        /**
         * Creates a new MegaTableSchema instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MegaTableSchema instance
         */
        public static create(properties?: conversation.IMegaTableSchema): conversation.MegaTableSchema;

        /**
         * Encodes the specified MegaTableSchema message. Does not implicitly {@link conversation.MegaTableSchema.verify|verify} messages.
         * @param message MegaTableSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IMegaTableSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MegaTableSchema message, length delimited. Does not implicitly {@link conversation.MegaTableSchema.verify|verify} messages.
         * @param message MegaTableSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IMegaTableSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MegaTableSchema message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MegaTableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.MegaTableSchema;

        /**
         * Decodes a MegaTableSchema message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MegaTableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.MegaTableSchema;

        /**
         * Verifies a MegaTableSchema message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MegaTableSchema message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MegaTableSchema
         */
        public static fromObject(object: { [k: string]: any }): conversation.MegaTableSchema;

        /**
         * Creates a plain object from a MegaTableSchema message. Also converts values to other types if specified.
         * @param message MegaTableSchema
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.MegaTableSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MegaTableSchema to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MegaTableSchema
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MegaTableIndividualTableInformation. */
    interface IMegaTableIndividualTableInformation {

        /** MegaTableIndividualTableInformation tableName */
        tableName?: (string|null);

        /** MegaTableIndividualTableInformation workspace */
        workspace?: (string|null);

        /** MegaTableIndividualTableInformation viewName */
        viewName?: (string|null);

        /** MegaTableIndividualTableInformation primaryKey */
        primaryKey?: (string|null);

        /** MegaTableIndividualTableInformation columnOnMainTableToJoin */
        columnOnMainTableToJoin?: (string|null);

        /** MegaTableIndividualTableInformation columnNameInView */
        columnNameInView?: (conversation.IMegaTableColumnInfomrationInTable[]|null);

        /** MegaTableIndividualTableInformation columnsOnMainTableToJoin */
        columnsOnMainTableToJoin?: (string[]|null);

        /** MegaTableIndividualTableInformation columnsOnTableWhichNeedToJoin */
        columnsOnTableWhichNeedToJoin?: (string[]|null);
    }

    /** Represents a MegaTableIndividualTableInformation. */
    class MegaTableIndividualTableInformation implements IMegaTableIndividualTableInformation {

        /**
         * Constructs a new MegaTableIndividualTableInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IMegaTableIndividualTableInformation);

        /** MegaTableIndividualTableInformation tableName. */
        public tableName: string;

        /** MegaTableIndividualTableInformation workspace. */
        public workspace: string;

        /** MegaTableIndividualTableInformation viewName. */
        public viewName: string;

        /** MegaTableIndividualTableInformation primaryKey. */
        public primaryKey: string;

        /** MegaTableIndividualTableInformation columnOnMainTableToJoin. */
        public columnOnMainTableToJoin: string;

        /** MegaTableIndividualTableInformation columnNameInView. */
        public columnNameInView: conversation.IMegaTableColumnInfomrationInTable[];

        /** MegaTableIndividualTableInformation columnsOnMainTableToJoin. */
        public columnsOnMainTableToJoin: string[];

        /** MegaTableIndividualTableInformation columnsOnTableWhichNeedToJoin. */
        public columnsOnTableWhichNeedToJoin: string[];

        /**
         * Creates a new MegaTableIndividualTableInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MegaTableIndividualTableInformation instance
         */
        public static create(properties?: conversation.IMegaTableIndividualTableInformation): conversation.MegaTableIndividualTableInformation;

        /**
         * Encodes the specified MegaTableIndividualTableInformation message. Does not implicitly {@link conversation.MegaTableIndividualTableInformation.verify|verify} messages.
         * @param message MegaTableIndividualTableInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IMegaTableIndividualTableInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MegaTableIndividualTableInformation message, length delimited. Does not implicitly {@link conversation.MegaTableIndividualTableInformation.verify|verify} messages.
         * @param message MegaTableIndividualTableInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IMegaTableIndividualTableInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MegaTableIndividualTableInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MegaTableIndividualTableInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.MegaTableIndividualTableInformation;

        /**
         * Decodes a MegaTableIndividualTableInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MegaTableIndividualTableInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.MegaTableIndividualTableInformation;

        /**
         * Verifies a MegaTableIndividualTableInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MegaTableIndividualTableInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MegaTableIndividualTableInformation
         */
        public static fromObject(object: { [k: string]: any }): conversation.MegaTableIndividualTableInformation;

        /**
         * Creates a plain object from a MegaTableIndividualTableInformation message. Also converts values to other types if specified.
         * @param message MegaTableIndividualTableInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.MegaTableIndividualTableInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MegaTableIndividualTableInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MegaTableIndividualTableInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MegaTableColumnInfomrationInTable. */
    interface IMegaTableColumnInfomrationInTable {

        /** MegaTableColumnInfomrationInTable columnName */
        columnName?: (string|null);

        /** MegaTableColumnInfomrationInTable columnNameInView */
        columnNameInView?: (string|null);
    }

    /** Represents a MegaTableColumnInfomrationInTable. */
    class MegaTableColumnInfomrationInTable implements IMegaTableColumnInfomrationInTable {

        /**
         * Constructs a new MegaTableColumnInfomrationInTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IMegaTableColumnInfomrationInTable);

        /** MegaTableColumnInfomrationInTable columnName. */
        public columnName: string;

        /** MegaTableColumnInfomrationInTable columnNameInView. */
        public columnNameInView: string;

        /**
         * Creates a new MegaTableColumnInfomrationInTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MegaTableColumnInfomrationInTable instance
         */
        public static create(properties?: conversation.IMegaTableColumnInfomrationInTable): conversation.MegaTableColumnInfomrationInTable;

        /**
         * Encodes the specified MegaTableColumnInfomrationInTable message. Does not implicitly {@link conversation.MegaTableColumnInfomrationInTable.verify|verify} messages.
         * @param message MegaTableColumnInfomrationInTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IMegaTableColumnInfomrationInTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MegaTableColumnInfomrationInTable message, length delimited. Does not implicitly {@link conversation.MegaTableColumnInfomrationInTable.verify|verify} messages.
         * @param message MegaTableColumnInfomrationInTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IMegaTableColumnInfomrationInTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MegaTableColumnInfomrationInTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MegaTableColumnInfomrationInTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.MegaTableColumnInfomrationInTable;

        /**
         * Decodes a MegaTableColumnInfomrationInTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MegaTableColumnInfomrationInTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.MegaTableColumnInfomrationInTable;

        /**
         * Verifies a MegaTableColumnInfomrationInTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MegaTableColumnInfomrationInTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MegaTableColumnInfomrationInTable
         */
        public static fromObject(object: { [k: string]: any }): conversation.MegaTableColumnInfomrationInTable;

        /**
         * Creates a plain object from a MegaTableColumnInfomrationInTable message. Also converts values to other types if specified.
         * @param message MegaTableColumnInfomrationInTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.MegaTableColumnInfomrationInTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MegaTableColumnInfomrationInTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MegaTableColumnInfomrationInTable
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MegaTableSchemaColumn. */
    interface IMegaTableSchemaColumn {

        /** MegaTableSchemaColumn name */
        name?: (string|null);

        /** MegaTableSchemaColumn type */
        type?: (string|null);

        /** MegaTableSchemaColumn topNItems */
        topNItems?: (string[]|null);

        /** MegaTableSchemaColumn isDimension */
        isDimension?: (boolean|null);

        /** MegaTableSchemaColumn isRepeated */
        isRepeated?: (boolean|null);

        /** MegaTableSchemaColumn originalName */
        originalName?: (string|null);

        /** MegaTableSchemaColumn isPii */
        isPii?: (boolean|null);
    }

    /** Represents a MegaTableSchemaColumn. */
    class MegaTableSchemaColumn implements IMegaTableSchemaColumn {

        /**
         * Constructs a new MegaTableSchemaColumn.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IMegaTableSchemaColumn);

        /** MegaTableSchemaColumn name. */
        public name: string;

        /** MegaTableSchemaColumn type. */
        public type: string;

        /** MegaTableSchemaColumn topNItems. */
        public topNItems: string[];

        /** MegaTableSchemaColumn isDimension. */
        public isDimension: boolean;

        /** MegaTableSchemaColumn isRepeated. */
        public isRepeated: boolean;

        /** MegaTableSchemaColumn originalName. */
        public originalName: string;

        /** MegaTableSchemaColumn isPii. */
        public isPii: boolean;

        /**
         * Creates a new MegaTableSchemaColumn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MegaTableSchemaColumn instance
         */
        public static create(properties?: conversation.IMegaTableSchemaColumn): conversation.MegaTableSchemaColumn;

        /**
         * Encodes the specified MegaTableSchemaColumn message. Does not implicitly {@link conversation.MegaTableSchemaColumn.verify|verify} messages.
         * @param message MegaTableSchemaColumn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IMegaTableSchemaColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MegaTableSchemaColumn message, length delimited. Does not implicitly {@link conversation.MegaTableSchemaColumn.verify|verify} messages.
         * @param message MegaTableSchemaColumn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IMegaTableSchemaColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MegaTableSchemaColumn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MegaTableSchemaColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.MegaTableSchemaColumn;

        /**
         * Decodes a MegaTableSchemaColumn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MegaTableSchemaColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.MegaTableSchemaColumn;

        /**
         * Verifies a MegaTableSchemaColumn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MegaTableSchemaColumn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MegaTableSchemaColumn
         */
        public static fromObject(object: { [k: string]: any }): conversation.MegaTableSchemaColumn;

        /**
         * Creates a plain object from a MegaTableSchemaColumn message. Also converts values to other types if specified.
         * @param message MegaTableSchemaColumn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.MegaTableSchemaColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MegaTableSchemaColumn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MegaTableSchemaColumn
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message id */
        id?: (string|null);

        /** Message text */
        text?: (string|null);

        /** Message conversationId */
        conversationId?: (string|null);

        /** Message timestamp */
        timestamp?: (number|null);

        /** Message userId */
        userId?: (number|null);

        /** Message botState */
        botState?: (conversation.BotState|null);

        /** Message botReply */
        botReply?: (conversation.IBotReply|null);

        /** Message ticket */
        ticket?: (conversation.ITicket|null);

        /** Message sentByEmail */
        sentByEmail?: (string|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IMessage);

        /** Message id. */
        public id: string;

        /** Message text. */
        public text: string;

        /** Message conversationId. */
        public conversationId: string;

        /** Message timestamp. */
        public timestamp: number;

        /** Message userId. */
        public userId: number;

        /** Message botState. */
        public botState: conversation.BotState;

        /** Message botReply. */
        public botReply?: (conversation.IBotReply|null);

        /** Message ticket. */
        public ticket?: (conversation.ITicket|null);

        /** Message sentByEmail. */
        public sentByEmail: string;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: conversation.IMessage): conversation.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link conversation.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link conversation.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): conversation.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotReply. */
    interface IBotReply {

        /** BotReply messageId */
        messageId?: (string|null);

        /** BotReply startTime */
        startTime?: (number|null);

        /** BotReply endTime */
        endTime?: (number|null);

        /** BotReply generatedSql */
        generatedSql?: (string|null);

        /** BotReply generatedSqlExplanation */
        generatedSqlExplanation?: (string|null);

        /** BotReply sqlExecutionResult */
        sqlExecutionResult?: (string|null);

        /** BotReply megaTableWithStatement */
        megaTableWithStatement?: (string|null);

        /** BotReply megaTableSchema */
        megaTableSchema?: (conversation.IMegaTableSchema|null);

        /** BotReply generatedSqlQueryParts */
        generatedSqlQueryParts?: (conversation.IGeneratedSQLQueryParts|null);

        /** BotReply sqlExecutionResultHumanForm */
        sqlExecutionResultHumanForm?: (string|null);

        /** BotReply conversationGeneratedSqlInformation */
        conversationGeneratedSqlInformation?: (conversation.IConversationGeneratedSQLInformation[]|null);

        /** BotReply botReplyChips */
        botReplyChips?: (conversation.IBotReplyChip[]|null);
    }

    /** Represents a BotReply. */
    class BotReply implements IBotReply {

        /**
         * Constructs a new BotReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IBotReply);

        /** BotReply messageId. */
        public messageId: string;

        /** BotReply startTime. */
        public startTime: number;

        /** BotReply endTime. */
        public endTime: number;

        /** BotReply generatedSql. */
        public generatedSql: string;

        /** BotReply generatedSqlExplanation. */
        public generatedSqlExplanation: string;

        /** BotReply sqlExecutionResult. */
        public sqlExecutionResult: string;

        /** BotReply megaTableWithStatement. */
        public megaTableWithStatement: string;

        /** BotReply megaTableSchema. */
        public megaTableSchema?: (conversation.IMegaTableSchema|null);

        /** BotReply generatedSqlQueryParts. */
        public generatedSqlQueryParts?: (conversation.IGeneratedSQLQueryParts|null);

        /** BotReply sqlExecutionResultHumanForm. */
        public sqlExecutionResultHumanForm: string;

        /** BotReply conversationGeneratedSqlInformation. */
        public conversationGeneratedSqlInformation: conversation.IConversationGeneratedSQLInformation[];

        /** BotReply botReplyChips. */
        public botReplyChips: conversation.IBotReplyChip[];

        /**
         * Creates a new BotReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotReply instance
         */
        public static create(properties?: conversation.IBotReply): conversation.BotReply;

        /**
         * Encodes the specified BotReply message. Does not implicitly {@link conversation.BotReply.verify|verify} messages.
         * @param message BotReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IBotReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotReply message, length delimited. Does not implicitly {@link conversation.BotReply.verify|verify} messages.
         * @param message BotReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IBotReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.BotReply;

        /**
         * Decodes a BotReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.BotReply;

        /**
         * Verifies a BotReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotReply
         */
        public static fromObject(object: { [k: string]: any }): conversation.BotReply;

        /**
         * Creates a plain object from a BotReply message. Also converts values to other types if specified.
         * @param message BotReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.BotReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BotReplyChip. */
    interface IBotReplyChip {

        /** BotReplyChip id */
        id?: (string|null);

        /** BotReplyChip type */
        type?: (conversation.BotReplyChipType|null);

        /** BotReplyChip content */
        content?: (string|null);

        /** BotReplyChip timestamp */
        timestamp?: (number|null);
    }

    /** Represents a BotReplyChip. */
    class BotReplyChip implements IBotReplyChip {

        /**
         * Constructs a new BotReplyChip.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IBotReplyChip);

        /** BotReplyChip id. */
        public id: string;

        /** BotReplyChip type. */
        public type: conversation.BotReplyChipType;

        /** BotReplyChip content. */
        public content: string;

        /** BotReplyChip timestamp. */
        public timestamp: number;

        /**
         * Creates a new BotReplyChip instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BotReplyChip instance
         */
        public static create(properties?: conversation.IBotReplyChip): conversation.BotReplyChip;

        /**
         * Encodes the specified BotReplyChip message. Does not implicitly {@link conversation.BotReplyChip.verify|verify} messages.
         * @param message BotReplyChip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IBotReplyChip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BotReplyChip message, length delimited. Does not implicitly {@link conversation.BotReplyChip.verify|verify} messages.
         * @param message BotReplyChip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IBotReplyChip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BotReplyChip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BotReplyChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.BotReplyChip;

        /**
         * Decodes a BotReplyChip message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BotReplyChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.BotReplyChip;

        /**
         * Verifies a BotReplyChip message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BotReplyChip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BotReplyChip
         */
        public static fromObject(object: { [k: string]: any }): conversation.BotReplyChip;

        /**
         * Creates a plain object from a BotReplyChip message. Also converts values to other types if specified.
         * @param message BotReplyChip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.BotReplyChip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BotReplyChip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BotReplyChip
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** BotState enum. */
    enum BotState {
        BotState_UNKNOWN = 0,
        GenerateSQL = 1,
        ExecuteSQL = 2,
        WaitingForInput = 3
    }

    /** SQLResultState enum. */
    enum SQLResultState {
        SQLResultState_UNKNOWN = 0,
        NOT_PRESENT = 1,
        IN_SYNC = 2,
        OUTDATED = 3
    }

    /** Properties of a Ticket. */
    interface ITicket {

        /** Ticket ticketId */
        ticketId?: (string|null);

        /** Ticket ticketStatus */
        ticketStatus?: (conversation.TicketStatus|null);
    }

    /** Represents a Ticket. */
    class Ticket implements ITicket {

        /**
         * Constructs a new Ticket.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.ITicket);

        /** Ticket ticketId. */
        public ticketId: string;

        /** Ticket ticketStatus. */
        public ticketStatus: conversation.TicketStatus;

        /**
         * Creates a new Ticket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ticket instance
         */
        public static create(properties?: conversation.ITicket): conversation.Ticket;

        /**
         * Encodes the specified Ticket message. Does not implicitly {@link conversation.Ticket.verify|verify} messages.
         * @param message Ticket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.ITicket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ticket message, length delimited. Does not implicitly {@link conversation.Ticket.verify|verify} messages.
         * @param message Ticket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.ITicket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ticket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ticket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.Ticket;

        /**
         * Decodes a Ticket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ticket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.Ticket;

        /**
         * Verifies a Ticket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ticket
         */
        public static fromObject(object: { [k: string]: any }): conversation.Ticket;

        /**
         * Creates a plain object from a Ticket message. Also converts values to other types if specified.
         * @param message Ticket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.Ticket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ticket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ticket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** TicketStatus enum. */
    enum TicketStatus {
        TicketStatus_UNKNOWN = 0,
        ASK_FOR_REVIEW = 1,
        APPROVED = 2,
        REJECTED = 3
    }

    /** Properties of a SQLProcessingCheckpoint. */
    interface ISQLProcessingCheckpoint {

        /** SQLProcessingCheckpoint checkpointId */
        checkpointId?: (string|null);

        /** SQLProcessingCheckpoint threadId */
        threadId?: (string|null);

        /** SQLProcessingCheckpoint state */
        state?: (conversation.SQLProcessingState|null);

        /** SQLProcessingCheckpoint workspace */
        workspace?: (string|null);

        /** SQLProcessingCheckpoint startTime */
        startTime?: (number|null);

        /** SQLProcessingCheckpoint endTime */
        endTime?: (number|null);
    }

    /** Represents a SQLProcessingCheckpoint. */
    class SQLProcessingCheckpoint implements ISQLProcessingCheckpoint {

        /**
         * Constructs a new SQLProcessingCheckpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.ISQLProcessingCheckpoint);

        /** SQLProcessingCheckpoint checkpointId. */
        public checkpointId: string;

        /** SQLProcessingCheckpoint threadId. */
        public threadId: string;

        /** SQLProcessingCheckpoint state. */
        public state: conversation.SQLProcessingState;

        /** SQLProcessingCheckpoint workspace. */
        public workspace: string;

        /** SQLProcessingCheckpoint startTime. */
        public startTime: number;

        /** SQLProcessingCheckpoint endTime. */
        public endTime: number;

        /**
         * Creates a new SQLProcessingCheckpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SQLProcessingCheckpoint instance
         */
        public static create(properties?: conversation.ISQLProcessingCheckpoint): conversation.SQLProcessingCheckpoint;

        /**
         * Encodes the specified SQLProcessingCheckpoint message. Does not implicitly {@link conversation.SQLProcessingCheckpoint.verify|verify} messages.
         * @param message SQLProcessingCheckpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.ISQLProcessingCheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SQLProcessingCheckpoint message, length delimited. Does not implicitly {@link conversation.SQLProcessingCheckpoint.verify|verify} messages.
         * @param message SQLProcessingCheckpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.ISQLProcessingCheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SQLProcessingCheckpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SQLProcessingCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.SQLProcessingCheckpoint;

        /**
         * Decodes a SQLProcessingCheckpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SQLProcessingCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.SQLProcessingCheckpoint;

        /**
         * Verifies a SQLProcessingCheckpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SQLProcessingCheckpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SQLProcessingCheckpoint
         */
        public static fromObject(object: { [k: string]: any }): conversation.SQLProcessingCheckpoint;

        /**
         * Creates a plain object from a SQLProcessingCheckpoint message. Also converts values to other types if specified.
         * @param message SQLProcessingCheckpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.SQLProcessingCheckpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SQLProcessingCheckpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SQLProcessingCheckpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConversationCheckpoint. */
    interface IConversationCheckpoint {

        /** ConversationCheckpoint eventTs */
        eventTs?: (string|null);

        /** ConversationCheckpoint tries */
        tries?: (number|null);

        /** ConversationCheckpoint state */
        state?: (conversation.ConversationState|null);

        /** ConversationCheckpoint workspace */
        workspace?: (string|null);
    }

    /** Represents a ConversationCheckpoint. */
    class ConversationCheckpoint implements IConversationCheckpoint {

        /**
         * Constructs a new ConversationCheckpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: conversation.IConversationCheckpoint);

        /** ConversationCheckpoint eventTs. */
        public eventTs: string;

        /** ConversationCheckpoint tries. */
        public tries: number;

        /** ConversationCheckpoint state. */
        public state: conversation.ConversationState;

        /** ConversationCheckpoint workspace. */
        public workspace: string;

        /**
         * Creates a new ConversationCheckpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConversationCheckpoint instance
         */
        public static create(properties?: conversation.IConversationCheckpoint): conversation.ConversationCheckpoint;

        /**
         * Encodes the specified ConversationCheckpoint message. Does not implicitly {@link conversation.ConversationCheckpoint.verify|verify} messages.
         * @param message ConversationCheckpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: conversation.IConversationCheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConversationCheckpoint message, length delimited. Does not implicitly {@link conversation.ConversationCheckpoint.verify|verify} messages.
         * @param message ConversationCheckpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: conversation.IConversationCheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConversationCheckpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConversationCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): conversation.ConversationCheckpoint;

        /**
         * Decodes a ConversationCheckpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConversationCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): conversation.ConversationCheckpoint;

        /**
         * Verifies a ConversationCheckpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConversationCheckpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConversationCheckpoint
         */
        public static fromObject(object: { [k: string]: any }): conversation.ConversationCheckpoint;

        /**
         * Creates a plain object from a ConversationCheckpoint message. Also converts values to other types if specified.
         * @param message ConversationCheckpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: conversation.ConversationCheckpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConversationCheckpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConversationCheckpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ConversationState enum. */
    enum ConversationState {
        ConversationState_UNKNOWN = 0,
        PRE_PROCESSING = 4,
        PROCESSING = 1,
        REPLIED = 2,
        GENERATION_FAILED = 3
    }

    /** SQLProcessingState enum. */
    enum SQLProcessingState {
        SQL_PROCESSING_STATE_UNKNOWN = 0,
        SQL_PROCESSING_STATE_PRE_PROCESSING = 1,
        SQL_PROCESSING_STATE_REPLIED = 2,
        SQL_PROCESSING_STATE_GENERATION_FAILED = 3,
        SQL_PROCESSING_STATE_TABLE_SELECTION = 4,
        SQL_PROCESSING_STATE_DRAFTING_SQL = 5,
        SQL_PROCESSING_STATE_VALIDATING_SQL = 6
    }

    /** BotReplyChipType enum. */
    enum BotReplyChipType {
        BOT_REPLY_CHIP_TYPE_UNKNOWN = 0,
        BOT_REPLY_CHIP_TYPE_TEXT = 1,
        BOT_REPLY_CHIP_TYPE_TABLE = 2,
        BOT_REPLY_CHIP_TYPE_SQL_GENERATION_PROGRESS = 3,
        BOT_REPLY_CHIP_TYPE_SQL_RESULT = 4,
        BOT_REPLY_CHIP_TYPE_SQL_EXPLANATION = 5
    }

    /** ConversationApp enum. */
    enum ConversationApp {
        CONVERSATION_APP_UNKNOWN = 0,
        CONVERSATION_APP_SLACK = 1,
        CONVERSATION_APP_DASHBOARD = 2
    }
}
