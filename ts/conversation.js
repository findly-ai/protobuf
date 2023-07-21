/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const conversation = $root.conversation = (() => {

    /**
     * Namespace conversation.
     * @exports conversation
     * @namespace
     */
    const conversation = {};

    conversation.AppConversation = (function() {

        /**
         * Properties of an AppConversation.
         * @memberof conversation
         * @interface IAppConversation
         * @property {conversation.ISlackConversation|null} [slackConversation] AppConversation slackConversation
         * @property {conversation.IDashboardConversation|null} [dashboardConversation] AppConversation dashboardConversation
         */

        /**
         * Constructs a new AppConversation.
         * @memberof conversation
         * @classdesc Represents an AppConversation.
         * @implements IAppConversation
         * @constructor
         * @param {conversation.IAppConversation=} [properties] Properties to set
         */
        function AppConversation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppConversation slackConversation.
         * @member {conversation.ISlackConversation|null|undefined} slackConversation
         * @memberof conversation.AppConversation
         * @instance
         */
        AppConversation.prototype.slackConversation = null;

        /**
         * AppConversation dashboardConversation.
         * @member {conversation.IDashboardConversation|null|undefined} dashboardConversation
         * @memberof conversation.AppConversation
         * @instance
         */
        AppConversation.prototype.dashboardConversation = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * AppConversation conversation.
         * @member {"slackConversation"|"dashboardConversation"|undefined} conversation
         * @memberof conversation.AppConversation
         * @instance
         */
        Object.defineProperty(AppConversation.prototype, "conversation", {
            get: $util.oneOfGetter($oneOfFields = ["slackConversation", "dashboardConversation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AppConversation instance using the specified properties.
         * @function create
         * @memberof conversation.AppConversation
         * @static
         * @param {conversation.IAppConversation=} [properties] Properties to set
         * @returns {conversation.AppConversation} AppConversation instance
         */
        AppConversation.create = function create(properties) {
            return new AppConversation(properties);
        };

        /**
         * Encodes the specified AppConversation message. Does not implicitly {@link conversation.AppConversation.verify|verify} messages.
         * @function encode
         * @memberof conversation.AppConversation
         * @static
         * @param {conversation.IAppConversation} message AppConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppConversation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slackConversation != null && Object.hasOwnProperty.call(message, "slackConversation"))
                $root.conversation.SlackConversation.encode(message.slackConversation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dashboardConversation != null && Object.hasOwnProperty.call(message, "dashboardConversation"))
                $root.conversation.DashboardConversation.encode(message.dashboardConversation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AppConversation message, length delimited. Does not implicitly {@link conversation.AppConversation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.AppConversation
         * @static
         * @param {conversation.IAppConversation} message AppConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppConversation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppConversation message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.AppConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.AppConversation} AppConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppConversation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.AppConversation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.slackConversation = $root.conversation.SlackConversation.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.dashboardConversation = $root.conversation.DashboardConversation.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppConversation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.AppConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.AppConversation} AppConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppConversation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppConversation message.
         * @function verify
         * @memberof conversation.AppConversation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppConversation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.slackConversation != null && message.hasOwnProperty("slackConversation")) {
                properties.conversation = 1;
                {
                    let error = $root.conversation.SlackConversation.verify(message.slackConversation);
                    if (error)
                        return "slackConversation." + error;
                }
            }
            if (message.dashboardConversation != null && message.hasOwnProperty("dashboardConversation")) {
                if (properties.conversation === 1)
                    return "conversation: multiple values";
                properties.conversation = 1;
                {
                    let error = $root.conversation.DashboardConversation.verify(message.dashboardConversation);
                    if (error)
                        return "dashboardConversation." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AppConversation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.AppConversation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.AppConversation} AppConversation
         */
        AppConversation.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.AppConversation)
                return object;
            let message = new $root.conversation.AppConversation();
            if (object.slackConversation != null) {
                if (typeof object.slackConversation !== "object")
                    throw TypeError(".conversation.AppConversation.slackConversation: object expected");
                message.slackConversation = $root.conversation.SlackConversation.fromObject(object.slackConversation);
            }
            if (object.dashboardConversation != null) {
                if (typeof object.dashboardConversation !== "object")
                    throw TypeError(".conversation.AppConversation.dashboardConversation: object expected");
                message.dashboardConversation = $root.conversation.DashboardConversation.fromObject(object.dashboardConversation);
            }
            return message;
        };

        /**
         * Creates a plain object from an AppConversation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.AppConversation
         * @static
         * @param {conversation.AppConversation} message AppConversation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppConversation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.slackConversation != null && message.hasOwnProperty("slackConversation")) {
                object.slackConversation = $root.conversation.SlackConversation.toObject(message.slackConversation, options);
                if (options.oneofs)
                    object.conversation = "slackConversation";
            }
            if (message.dashboardConversation != null && message.hasOwnProperty("dashboardConversation")) {
                object.dashboardConversation = $root.conversation.DashboardConversation.toObject(message.dashboardConversation, options);
                if (options.oneofs)
                    object.conversation = "dashboardConversation";
            }
            return object;
        };

        /**
         * Converts this AppConversation to JSON.
         * @function toJSON
         * @memberof conversation.AppConversation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppConversation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppConversation
         * @function getTypeUrl
         * @memberof conversation.AppConversation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppConversation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.AppConversation";
        };

        return AppConversation;
    })();

    conversation.SlackConversation = (function() {

        /**
         * Properties of a SlackConversation.
         * @memberof conversation
         * @interface ISlackConversation
         * @property {conversation.IConversation|null} [conversation] SlackConversation conversation
         * @property {string|null} [channelId] SlackConversation channelId
         * @property {string|null} [teamId] SlackConversation teamId
         * @property {string|null} [threadId] SlackConversation threadId
         * @property {string|null} [eventId] SlackConversation eventId
         */

        /**
         * Constructs a new SlackConversation.
         * @memberof conversation
         * @classdesc Represents a SlackConversation.
         * @implements ISlackConversation
         * @constructor
         * @param {conversation.ISlackConversation=} [properties] Properties to set
         */
        function SlackConversation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlackConversation conversation.
         * @member {conversation.IConversation|null|undefined} conversation
         * @memberof conversation.SlackConversation
         * @instance
         */
        SlackConversation.prototype.conversation = null;

        /**
         * SlackConversation channelId.
         * @member {string} channelId
         * @memberof conversation.SlackConversation
         * @instance
         */
        SlackConversation.prototype.channelId = "";

        /**
         * SlackConversation teamId.
         * @member {string} teamId
         * @memberof conversation.SlackConversation
         * @instance
         */
        SlackConversation.prototype.teamId = "";

        /**
         * SlackConversation threadId.
         * @member {string} threadId
         * @memberof conversation.SlackConversation
         * @instance
         */
        SlackConversation.prototype.threadId = "";

        /**
         * SlackConversation eventId.
         * @member {string} eventId
         * @memberof conversation.SlackConversation
         * @instance
         */
        SlackConversation.prototype.eventId = "";

        /**
         * Creates a new SlackConversation instance using the specified properties.
         * @function create
         * @memberof conversation.SlackConversation
         * @static
         * @param {conversation.ISlackConversation=} [properties] Properties to set
         * @returns {conversation.SlackConversation} SlackConversation instance
         */
        SlackConversation.create = function create(properties) {
            return new SlackConversation(properties);
        };

        /**
         * Encodes the specified SlackConversation message. Does not implicitly {@link conversation.SlackConversation.verify|verify} messages.
         * @function encode
         * @memberof conversation.SlackConversation
         * @static
         * @param {conversation.ISlackConversation} message SlackConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlackConversation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation != null && Object.hasOwnProperty.call(message, "conversation"))
                $root.conversation.Conversation.encode(message.conversation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelId);
            if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.teamId);
            if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.threadId);
            if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.eventId);
            return writer;
        };

        /**
         * Encodes the specified SlackConversation message, length delimited. Does not implicitly {@link conversation.SlackConversation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.SlackConversation
         * @static
         * @param {conversation.ISlackConversation} message SlackConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlackConversation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlackConversation message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.SlackConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.SlackConversation} SlackConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlackConversation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.SlackConversation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation = $root.conversation.Conversation.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.channelId = reader.string();
                        break;
                    }
                case 3: {
                        message.teamId = reader.string();
                        break;
                    }
                case 4: {
                        message.threadId = reader.string();
                        break;
                    }
                case 5: {
                        message.eventId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SlackConversation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.SlackConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.SlackConversation} SlackConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlackConversation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlackConversation message.
         * @function verify
         * @memberof conversation.SlackConversation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlackConversation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation != null && message.hasOwnProperty("conversation")) {
                let error = $root.conversation.Conversation.verify(message.conversation);
                if (error)
                    return "conversation." + error;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isString(message.teamId))
                    return "teamId: string expected";
            if (message.threadId != null && message.hasOwnProperty("threadId"))
                if (!$util.isString(message.threadId))
                    return "threadId: string expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isString(message.eventId))
                    return "eventId: string expected";
            return null;
        };

        /**
         * Creates a SlackConversation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.SlackConversation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.SlackConversation} SlackConversation
         */
        SlackConversation.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.SlackConversation)
                return object;
            let message = new $root.conversation.SlackConversation();
            if (object.conversation != null) {
                if (typeof object.conversation !== "object")
                    throw TypeError(".conversation.SlackConversation.conversation: object expected");
                message.conversation = $root.conversation.Conversation.fromObject(object.conversation);
            }
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.teamId != null)
                message.teamId = String(object.teamId);
            if (object.threadId != null)
                message.threadId = String(object.threadId);
            if (object.eventId != null)
                message.eventId = String(object.eventId);
            return message;
        };

        /**
         * Creates a plain object from a SlackConversation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.SlackConversation
         * @static
         * @param {conversation.SlackConversation} message SlackConversation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlackConversation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.conversation = null;
                object.channelId = "";
                object.teamId = "";
                object.threadId = "";
                object.eventId = "";
            }
            if (message.conversation != null && message.hasOwnProperty("conversation"))
                object.conversation = $root.conversation.Conversation.toObject(message.conversation, options);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                object.teamId = message.teamId;
            if (message.threadId != null && message.hasOwnProperty("threadId"))
                object.threadId = message.threadId;
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            return object;
        };

        /**
         * Converts this SlackConversation to JSON.
         * @function toJSON
         * @memberof conversation.SlackConversation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlackConversation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SlackConversation
         * @function getTypeUrl
         * @memberof conversation.SlackConversation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SlackConversation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.SlackConversation";
        };

        return SlackConversation;
    })();

    conversation.DashboardConversation = (function() {

        /**
         * Properties of a DashboardConversation.
         * @memberof conversation
         * @interface IDashboardConversation
         * @property {conversation.IConversation|null} [conversation] DashboardConversation conversation
         */

        /**
         * Constructs a new DashboardConversation.
         * @memberof conversation
         * @classdesc Represents a DashboardConversation.
         * @implements IDashboardConversation
         * @constructor
         * @param {conversation.IDashboardConversation=} [properties] Properties to set
         */
        function DashboardConversation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DashboardConversation conversation.
         * @member {conversation.IConversation|null|undefined} conversation
         * @memberof conversation.DashboardConversation
         * @instance
         */
        DashboardConversation.prototype.conversation = null;

        /**
         * Creates a new DashboardConversation instance using the specified properties.
         * @function create
         * @memberof conversation.DashboardConversation
         * @static
         * @param {conversation.IDashboardConversation=} [properties] Properties to set
         * @returns {conversation.DashboardConversation} DashboardConversation instance
         */
        DashboardConversation.create = function create(properties) {
            return new DashboardConversation(properties);
        };

        /**
         * Encodes the specified DashboardConversation message. Does not implicitly {@link conversation.DashboardConversation.verify|verify} messages.
         * @function encode
         * @memberof conversation.DashboardConversation
         * @static
         * @param {conversation.IDashboardConversation} message DashboardConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DashboardConversation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation != null && Object.hasOwnProperty.call(message, "conversation"))
                $root.conversation.Conversation.encode(message.conversation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DashboardConversation message, length delimited. Does not implicitly {@link conversation.DashboardConversation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.DashboardConversation
         * @static
         * @param {conversation.IDashboardConversation} message DashboardConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DashboardConversation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DashboardConversation message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.DashboardConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.DashboardConversation} DashboardConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DashboardConversation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.DashboardConversation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation = $root.conversation.Conversation.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DashboardConversation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.DashboardConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.DashboardConversation} DashboardConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DashboardConversation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DashboardConversation message.
         * @function verify
         * @memberof conversation.DashboardConversation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DashboardConversation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation != null && message.hasOwnProperty("conversation")) {
                let error = $root.conversation.Conversation.verify(message.conversation);
                if (error)
                    return "conversation." + error;
            }
            return null;
        };

        /**
         * Creates a DashboardConversation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.DashboardConversation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.DashboardConversation} DashboardConversation
         */
        DashboardConversation.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.DashboardConversation)
                return object;
            let message = new $root.conversation.DashboardConversation();
            if (object.conversation != null) {
                if (typeof object.conversation !== "object")
                    throw TypeError(".conversation.DashboardConversation.conversation: object expected");
                message.conversation = $root.conversation.Conversation.fromObject(object.conversation);
            }
            return message;
        };

        /**
         * Creates a plain object from a DashboardConversation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.DashboardConversation
         * @static
         * @param {conversation.DashboardConversation} message DashboardConversation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DashboardConversation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.conversation = null;
            if (message.conversation != null && message.hasOwnProperty("conversation"))
                object.conversation = $root.conversation.Conversation.toObject(message.conversation, options);
            return object;
        };

        /**
         * Converts this DashboardConversation to JSON.
         * @function toJSON
         * @memberof conversation.DashboardConversation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DashboardConversation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DashboardConversation
         * @function getTypeUrl
         * @memberof conversation.DashboardConversation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DashboardConversation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.DashboardConversation";
        };

        return DashboardConversation;
    })();

    conversation.Conversation = (function() {

        /**
         * Properties of a Conversation.
         * @memberof conversation
         * @interface IConversation
         * @property {string|null} [id] Conversation id
         * @property {string|null} [workspace] Conversation workspace
         * @property {number|null} [timestamp] Conversation timestamp
         * @property {number|null} [lastUpdated] Conversation lastUpdated
         * @property {Array.<conversation.IMessage>|null} [messages] Conversation messages
         * @property {string|null} [startedByEmail] Conversation startedByEmail
         */

        /**
         * Constructs a new Conversation.
         * @memberof conversation
         * @classdesc Represents a Conversation.
         * @implements IConversation
         * @constructor
         * @param {conversation.IConversation=} [properties] Properties to set
         */
        function Conversation(properties) {
            this.messages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Conversation id.
         * @member {string} id
         * @memberof conversation.Conversation
         * @instance
         */
        Conversation.prototype.id = "";

        /**
         * Conversation workspace.
         * @member {string} workspace
         * @memberof conversation.Conversation
         * @instance
         */
        Conversation.prototype.workspace = "";

        /**
         * Conversation timestamp.
         * @member {number} timestamp
         * @memberof conversation.Conversation
         * @instance
         */
        Conversation.prototype.timestamp = 0;

        /**
         * Conversation lastUpdated.
         * @member {number} lastUpdated
         * @memberof conversation.Conversation
         * @instance
         */
        Conversation.prototype.lastUpdated = 0;

        /**
         * Conversation messages.
         * @member {Array.<conversation.IMessage>} messages
         * @memberof conversation.Conversation
         * @instance
         */
        Conversation.prototype.messages = $util.emptyArray;

        /**
         * Conversation startedByEmail.
         * @member {string} startedByEmail
         * @memberof conversation.Conversation
         * @instance
         */
        Conversation.prototype.startedByEmail = "";

        /**
         * Creates a new Conversation instance using the specified properties.
         * @function create
         * @memberof conversation.Conversation
         * @static
         * @param {conversation.IConversation=} [properties] Properties to set
         * @returns {conversation.Conversation} Conversation instance
         */
        Conversation.create = function create(properties) {
            return new Conversation(properties);
        };

        /**
         * Encodes the specified Conversation message. Does not implicitly {@link conversation.Conversation.verify|verify} messages.
         * @function encode
         * @memberof conversation.Conversation
         * @static
         * @param {conversation.IConversation} message Conversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Conversation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.workspace != null && Object.hasOwnProperty.call(message, "workspace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.workspace);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timestamp);
            if (message.lastUpdated != null && Object.hasOwnProperty.call(message, "lastUpdated"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lastUpdated);
            if (message.messages != null && message.messages.length)
                for (let i = 0; i < message.messages.length; ++i)
                    $root.conversation.Message.encode(message.messages[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.startedByEmail != null && Object.hasOwnProperty.call(message, "startedByEmail"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.startedByEmail);
            return writer;
        };

        /**
         * Encodes the specified Conversation message, length delimited. Does not implicitly {@link conversation.Conversation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.Conversation
         * @static
         * @param {conversation.IConversation} message Conversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Conversation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Conversation message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.Conversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.Conversation} Conversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Conversation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.Conversation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.workspace = reader.string();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.int32();
                        break;
                    }
                case 4: {
                        message.lastUpdated = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.conversation.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.startedByEmail = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Conversation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.Conversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.Conversation} Conversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Conversation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Conversation message.
         * @function verify
         * @memberof conversation.Conversation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Conversation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                if (!$util.isString(message.workspace))
                    return "workspace: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
                if (!$util.isInteger(message.lastUpdated))
                    return "lastUpdated: integer expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (let i = 0; i < message.messages.length; ++i) {
                    let error = $root.conversation.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.startedByEmail != null && message.hasOwnProperty("startedByEmail"))
                if (!$util.isString(message.startedByEmail))
                    return "startedByEmail: string expected";
            return null;
        };

        /**
         * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.Conversation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.Conversation} Conversation
         */
        Conversation.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.Conversation)
                return object;
            let message = new $root.conversation.Conversation();
            if (object.id != null)
                message.id = String(object.id);
            if (object.workspace != null)
                message.workspace = String(object.workspace);
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            if (object.lastUpdated != null)
                message.lastUpdated = object.lastUpdated | 0;
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".conversation.Conversation.messages: array expected");
                message.messages = [];
                for (let i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".conversation.Conversation.messages: object expected");
                    message.messages[i] = $root.conversation.Message.fromObject(object.messages[i]);
                }
            }
            if (object.startedByEmail != null)
                message.startedByEmail = String(object.startedByEmail);
            return message;
        };

        /**
         * Creates a plain object from a Conversation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.Conversation
         * @static
         * @param {conversation.Conversation} message Conversation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Conversation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults) {
                object.id = "";
                object.workspace = "";
                object.timestamp = 0;
                object.lastUpdated = 0;
                object.startedByEmail = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                object.workspace = message.workspace;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
                object.lastUpdated = message.lastUpdated;
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (let j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.conversation.Message.toObject(message.messages[j], options);
            }
            if (message.startedByEmail != null && message.hasOwnProperty("startedByEmail"))
                object.startedByEmail = message.startedByEmail;
            return object;
        };

        /**
         * Converts this Conversation to JSON.
         * @function toJSON
         * @memberof conversation.Conversation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Conversation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Conversation
         * @function getTypeUrl
         * @memberof conversation.Conversation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Conversation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.Conversation";
        };

        return Conversation;
    })();

    conversation.ConversationGeneratedSQLInformation = (function() {

        /**
         * Properties of a ConversationGeneratedSQLInformation.
         * @memberof conversation
         * @interface IConversationGeneratedSQLInformation
         * @property {string|null} [id] ConversationGeneratedSQLInformation id
         * @property {string|null} [mainTableName] ConversationGeneratedSQLInformation mainTableName
         * @property {number|null} [mainTableScore] ConversationGeneratedSQLInformation mainTableScore
         * @property {conversation.IMegaTableSchema|null} [megaTableSchema] ConversationGeneratedSQLInformation megaTableSchema
         * @property {conversation.IGeneratedSQLQueryParts|null} [generatedSqlQueryParts] ConversationGeneratedSQLInformation generatedSqlQueryParts
         * @property {number|null} [answerScore] ConversationGeneratedSQLInformation answerScore
         */

        /**
         * Constructs a new ConversationGeneratedSQLInformation.
         * @memberof conversation
         * @classdesc Represents a ConversationGeneratedSQLInformation.
         * @implements IConversationGeneratedSQLInformation
         * @constructor
         * @param {conversation.IConversationGeneratedSQLInformation=} [properties] Properties to set
         */
        function ConversationGeneratedSQLInformation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConversationGeneratedSQLInformation id.
         * @member {string} id
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         */
        ConversationGeneratedSQLInformation.prototype.id = "";

        /**
         * ConversationGeneratedSQLInformation mainTableName.
         * @member {string} mainTableName
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         */
        ConversationGeneratedSQLInformation.prototype.mainTableName = "";

        /**
         * ConversationGeneratedSQLInformation mainTableScore.
         * @member {number} mainTableScore
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         */
        ConversationGeneratedSQLInformation.prototype.mainTableScore = 0;

        /**
         * ConversationGeneratedSQLInformation megaTableSchema.
         * @member {conversation.IMegaTableSchema|null|undefined} megaTableSchema
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         */
        ConversationGeneratedSQLInformation.prototype.megaTableSchema = null;

        /**
         * ConversationGeneratedSQLInformation generatedSqlQueryParts.
         * @member {conversation.IGeneratedSQLQueryParts|null|undefined} generatedSqlQueryParts
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         */
        ConversationGeneratedSQLInformation.prototype.generatedSqlQueryParts = null;

        /**
         * ConversationGeneratedSQLInformation answerScore.
         * @member {number} answerScore
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         */
        ConversationGeneratedSQLInformation.prototype.answerScore = 0;

        /**
         * Creates a new ConversationGeneratedSQLInformation instance using the specified properties.
         * @function create
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {conversation.IConversationGeneratedSQLInformation=} [properties] Properties to set
         * @returns {conversation.ConversationGeneratedSQLInformation} ConversationGeneratedSQLInformation instance
         */
        ConversationGeneratedSQLInformation.create = function create(properties) {
            return new ConversationGeneratedSQLInformation(properties);
        };

        /**
         * Encodes the specified ConversationGeneratedSQLInformation message. Does not implicitly {@link conversation.ConversationGeneratedSQLInformation.verify|verify} messages.
         * @function encode
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {conversation.IConversationGeneratedSQLInformation} message ConversationGeneratedSQLInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationGeneratedSQLInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.mainTableName != null && Object.hasOwnProperty.call(message, "mainTableName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mainTableName);
            if (message.mainTableScore != null && Object.hasOwnProperty.call(message, "mainTableScore"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.mainTableScore);
            if (message.megaTableSchema != null && Object.hasOwnProperty.call(message, "megaTableSchema"))
                $root.conversation.MegaTableSchema.encode(message.megaTableSchema, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.generatedSqlQueryParts != null && Object.hasOwnProperty.call(message, "generatedSqlQueryParts"))
                $root.conversation.GeneratedSQLQueryParts.encode(message.generatedSqlQueryParts, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.answerScore != null && Object.hasOwnProperty.call(message, "answerScore"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.answerScore);
            return writer;
        };

        /**
         * Encodes the specified ConversationGeneratedSQLInformation message, length delimited. Does not implicitly {@link conversation.ConversationGeneratedSQLInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {conversation.IConversationGeneratedSQLInformation} message ConversationGeneratedSQLInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationGeneratedSQLInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConversationGeneratedSQLInformation message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.ConversationGeneratedSQLInformation} ConversationGeneratedSQLInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationGeneratedSQLInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.ConversationGeneratedSQLInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.mainTableName = reader.string();
                        break;
                    }
                case 3: {
                        message.mainTableScore = reader.double();
                        break;
                    }
                case 4: {
                        message.megaTableSchema = $root.conversation.MegaTableSchema.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.generatedSqlQueryParts = $root.conversation.GeneratedSQLQueryParts.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.answerScore = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConversationGeneratedSQLInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.ConversationGeneratedSQLInformation} ConversationGeneratedSQLInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationGeneratedSQLInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConversationGeneratedSQLInformation message.
         * @function verify
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConversationGeneratedSQLInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.mainTableName != null && message.hasOwnProperty("mainTableName"))
                if (!$util.isString(message.mainTableName))
                    return "mainTableName: string expected";
            if (message.mainTableScore != null && message.hasOwnProperty("mainTableScore"))
                if (typeof message.mainTableScore !== "number")
                    return "mainTableScore: number expected";
            if (message.megaTableSchema != null && message.hasOwnProperty("megaTableSchema")) {
                let error = $root.conversation.MegaTableSchema.verify(message.megaTableSchema);
                if (error)
                    return "megaTableSchema." + error;
            }
            if (message.generatedSqlQueryParts != null && message.hasOwnProperty("generatedSqlQueryParts")) {
                let error = $root.conversation.GeneratedSQLQueryParts.verify(message.generatedSqlQueryParts);
                if (error)
                    return "generatedSqlQueryParts." + error;
            }
            if (message.answerScore != null && message.hasOwnProperty("answerScore"))
                if (typeof message.answerScore !== "number")
                    return "answerScore: number expected";
            return null;
        };

        /**
         * Creates a ConversationGeneratedSQLInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.ConversationGeneratedSQLInformation} ConversationGeneratedSQLInformation
         */
        ConversationGeneratedSQLInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.ConversationGeneratedSQLInformation)
                return object;
            let message = new $root.conversation.ConversationGeneratedSQLInformation();
            if (object.id != null)
                message.id = String(object.id);
            if (object.mainTableName != null)
                message.mainTableName = String(object.mainTableName);
            if (object.mainTableScore != null)
                message.mainTableScore = Number(object.mainTableScore);
            if (object.megaTableSchema != null) {
                if (typeof object.megaTableSchema !== "object")
                    throw TypeError(".conversation.ConversationGeneratedSQLInformation.megaTableSchema: object expected");
                message.megaTableSchema = $root.conversation.MegaTableSchema.fromObject(object.megaTableSchema);
            }
            if (object.generatedSqlQueryParts != null) {
                if (typeof object.generatedSqlQueryParts !== "object")
                    throw TypeError(".conversation.ConversationGeneratedSQLInformation.generatedSqlQueryParts: object expected");
                message.generatedSqlQueryParts = $root.conversation.GeneratedSQLQueryParts.fromObject(object.generatedSqlQueryParts);
            }
            if (object.answerScore != null)
                message.answerScore = Number(object.answerScore);
            return message;
        };

        /**
         * Creates a plain object from a ConversationGeneratedSQLInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {conversation.ConversationGeneratedSQLInformation} message ConversationGeneratedSQLInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConversationGeneratedSQLInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.mainTableName = "";
                object.mainTableScore = 0;
                object.megaTableSchema = null;
                object.generatedSqlQueryParts = null;
                object.answerScore = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.mainTableName != null && message.hasOwnProperty("mainTableName"))
                object.mainTableName = message.mainTableName;
            if (message.mainTableScore != null && message.hasOwnProperty("mainTableScore"))
                object.mainTableScore = options.json && !isFinite(message.mainTableScore) ? String(message.mainTableScore) : message.mainTableScore;
            if (message.megaTableSchema != null && message.hasOwnProperty("megaTableSchema"))
                object.megaTableSchema = $root.conversation.MegaTableSchema.toObject(message.megaTableSchema, options);
            if (message.generatedSqlQueryParts != null && message.hasOwnProperty("generatedSqlQueryParts"))
                object.generatedSqlQueryParts = $root.conversation.GeneratedSQLQueryParts.toObject(message.generatedSqlQueryParts, options);
            if (message.answerScore != null && message.hasOwnProperty("answerScore"))
                object.answerScore = options.json && !isFinite(message.answerScore) ? String(message.answerScore) : message.answerScore;
            return object;
        };

        /**
         * Converts this ConversationGeneratedSQLInformation to JSON.
         * @function toJSON
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConversationGeneratedSQLInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConversationGeneratedSQLInformation
         * @function getTypeUrl
         * @memberof conversation.ConversationGeneratedSQLInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConversationGeneratedSQLInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.ConversationGeneratedSQLInformation";
        };

        return ConversationGeneratedSQLInformation;
    })();

    conversation.GeneratedSQLQueryParts = (function() {

        /**
         * Properties of a GeneratedSQLQueryParts.
         * @memberof conversation
         * @interface IGeneratedSQLQueryParts
         * @property {string|null} [megaTableWithStatement] GeneratedSQLQueryParts megaTableWithStatement
         * @property {string|null} [megaTableAggregatedWithStatement] GeneratedSQLQueryParts megaTableAggregatedWithStatement
         * @property {string|null} [generatedSql] GeneratedSQLQueryParts generatedSql
         * @property {string|null} [generatedSqlWithoutMegatableSchema] GeneratedSQLQueryParts generatedSqlWithoutMegatableSchema
         * @property {string|null} [whereClause] GeneratedSQLQueryParts whereClause
         * @property {Array.<string>|null} [groupByColumns] GeneratedSQLQueryParts groupByColumns
         * @property {Array.<string>|null} [metricsExpression] GeneratedSQLQueryParts metricsExpression
         * @property {string|null} [limit] GeneratedSQLQueryParts limit
         * @property {string|null} [orderBy] GeneratedSQLQueryParts orderBy
         */

        /**
         * Constructs a new GeneratedSQLQueryParts.
         * @memberof conversation
         * @classdesc Represents a GeneratedSQLQueryParts.
         * @implements IGeneratedSQLQueryParts
         * @constructor
         * @param {conversation.IGeneratedSQLQueryParts=} [properties] Properties to set
         */
        function GeneratedSQLQueryParts(properties) {
            this.groupByColumns = [];
            this.metricsExpression = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneratedSQLQueryParts megaTableWithStatement.
         * @member {string} megaTableWithStatement
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.megaTableWithStatement = "";

        /**
         * GeneratedSQLQueryParts megaTableAggregatedWithStatement.
         * @member {string} megaTableAggregatedWithStatement
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.megaTableAggregatedWithStatement = "";

        /**
         * GeneratedSQLQueryParts generatedSql.
         * @member {string} generatedSql
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.generatedSql = "";

        /**
         * GeneratedSQLQueryParts generatedSqlWithoutMegatableSchema.
         * @member {string} generatedSqlWithoutMegatableSchema
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.generatedSqlWithoutMegatableSchema = "";

        /**
         * GeneratedSQLQueryParts whereClause.
         * @member {string} whereClause
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.whereClause = "";

        /**
         * GeneratedSQLQueryParts groupByColumns.
         * @member {Array.<string>} groupByColumns
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.groupByColumns = $util.emptyArray;

        /**
         * GeneratedSQLQueryParts metricsExpression.
         * @member {Array.<string>} metricsExpression
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.metricsExpression = $util.emptyArray;

        /**
         * GeneratedSQLQueryParts limit.
         * @member {string} limit
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.limit = "";

        /**
         * GeneratedSQLQueryParts orderBy.
         * @member {string} orderBy
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         */
        GeneratedSQLQueryParts.prototype.orderBy = "";

        /**
         * Creates a new GeneratedSQLQueryParts instance using the specified properties.
         * @function create
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {conversation.IGeneratedSQLQueryParts=} [properties] Properties to set
         * @returns {conversation.GeneratedSQLQueryParts} GeneratedSQLQueryParts instance
         */
        GeneratedSQLQueryParts.create = function create(properties) {
            return new GeneratedSQLQueryParts(properties);
        };

        /**
         * Encodes the specified GeneratedSQLQueryParts message. Does not implicitly {@link conversation.GeneratedSQLQueryParts.verify|verify} messages.
         * @function encode
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {conversation.IGeneratedSQLQueryParts} message GeneratedSQLQueryParts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneratedSQLQueryParts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.megaTableWithStatement != null && Object.hasOwnProperty.call(message, "megaTableWithStatement"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.megaTableWithStatement);
            if (message.megaTableAggregatedWithStatement != null && Object.hasOwnProperty.call(message, "megaTableAggregatedWithStatement"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.megaTableAggregatedWithStatement);
            if (message.generatedSql != null && Object.hasOwnProperty.call(message, "generatedSql"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.generatedSql);
            if (message.generatedSqlWithoutMegatableSchema != null && Object.hasOwnProperty.call(message, "generatedSqlWithoutMegatableSchema"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.generatedSqlWithoutMegatableSchema);
            if (message.whereClause != null && Object.hasOwnProperty.call(message, "whereClause"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.whereClause);
            if (message.groupByColumns != null && message.groupByColumns.length)
                for (let i = 0; i < message.groupByColumns.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.groupByColumns[i]);
            if (message.metricsExpression != null && message.metricsExpression.length)
                for (let i = 0; i < message.metricsExpression.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.metricsExpression[i]);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.limit);
            if (message.orderBy != null && Object.hasOwnProperty.call(message, "orderBy"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.orderBy);
            return writer;
        };

        /**
         * Encodes the specified GeneratedSQLQueryParts message, length delimited. Does not implicitly {@link conversation.GeneratedSQLQueryParts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {conversation.IGeneratedSQLQueryParts} message GeneratedSQLQueryParts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneratedSQLQueryParts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GeneratedSQLQueryParts message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.GeneratedSQLQueryParts} GeneratedSQLQueryParts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneratedSQLQueryParts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.GeneratedSQLQueryParts();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.megaTableWithStatement = reader.string();
                        break;
                    }
                case 2: {
                        message.megaTableAggregatedWithStatement = reader.string();
                        break;
                    }
                case 3: {
                        message.generatedSql = reader.string();
                        break;
                    }
                case 4: {
                        message.generatedSqlWithoutMegatableSchema = reader.string();
                        break;
                    }
                case 5: {
                        message.whereClause = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.groupByColumns && message.groupByColumns.length))
                            message.groupByColumns = [];
                        message.groupByColumns.push(reader.string());
                        break;
                    }
                case 7: {
                        if (!(message.metricsExpression && message.metricsExpression.length))
                            message.metricsExpression = [];
                        message.metricsExpression.push(reader.string());
                        break;
                    }
                case 8: {
                        message.limit = reader.string();
                        break;
                    }
                case 9: {
                        message.orderBy = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GeneratedSQLQueryParts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.GeneratedSQLQueryParts} GeneratedSQLQueryParts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneratedSQLQueryParts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GeneratedSQLQueryParts message.
         * @function verify
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GeneratedSQLQueryParts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.megaTableWithStatement != null && message.hasOwnProperty("megaTableWithStatement"))
                if (!$util.isString(message.megaTableWithStatement))
                    return "megaTableWithStatement: string expected";
            if (message.megaTableAggregatedWithStatement != null && message.hasOwnProperty("megaTableAggregatedWithStatement"))
                if (!$util.isString(message.megaTableAggregatedWithStatement))
                    return "megaTableAggregatedWithStatement: string expected";
            if (message.generatedSql != null && message.hasOwnProperty("generatedSql"))
                if (!$util.isString(message.generatedSql))
                    return "generatedSql: string expected";
            if (message.generatedSqlWithoutMegatableSchema != null && message.hasOwnProperty("generatedSqlWithoutMegatableSchema"))
                if (!$util.isString(message.generatedSqlWithoutMegatableSchema))
                    return "generatedSqlWithoutMegatableSchema: string expected";
            if (message.whereClause != null && message.hasOwnProperty("whereClause"))
                if (!$util.isString(message.whereClause))
                    return "whereClause: string expected";
            if (message.groupByColumns != null && message.hasOwnProperty("groupByColumns")) {
                if (!Array.isArray(message.groupByColumns))
                    return "groupByColumns: array expected";
                for (let i = 0; i < message.groupByColumns.length; ++i)
                    if (!$util.isString(message.groupByColumns[i]))
                        return "groupByColumns: string[] expected";
            }
            if (message.metricsExpression != null && message.hasOwnProperty("metricsExpression")) {
                if (!Array.isArray(message.metricsExpression))
                    return "metricsExpression: array expected";
                for (let i = 0; i < message.metricsExpression.length; ++i)
                    if (!$util.isString(message.metricsExpression[i]))
                        return "metricsExpression: string[] expected";
            }
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isString(message.limit))
                    return "limit: string expected";
            if (message.orderBy != null && message.hasOwnProperty("orderBy"))
                if (!$util.isString(message.orderBy))
                    return "orderBy: string expected";
            return null;
        };

        /**
         * Creates a GeneratedSQLQueryParts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.GeneratedSQLQueryParts} GeneratedSQLQueryParts
         */
        GeneratedSQLQueryParts.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.GeneratedSQLQueryParts)
                return object;
            let message = new $root.conversation.GeneratedSQLQueryParts();
            if (object.megaTableWithStatement != null)
                message.megaTableWithStatement = String(object.megaTableWithStatement);
            if (object.megaTableAggregatedWithStatement != null)
                message.megaTableAggregatedWithStatement = String(object.megaTableAggregatedWithStatement);
            if (object.generatedSql != null)
                message.generatedSql = String(object.generatedSql);
            if (object.generatedSqlWithoutMegatableSchema != null)
                message.generatedSqlWithoutMegatableSchema = String(object.generatedSqlWithoutMegatableSchema);
            if (object.whereClause != null)
                message.whereClause = String(object.whereClause);
            if (object.groupByColumns) {
                if (!Array.isArray(object.groupByColumns))
                    throw TypeError(".conversation.GeneratedSQLQueryParts.groupByColumns: array expected");
                message.groupByColumns = [];
                for (let i = 0; i < object.groupByColumns.length; ++i)
                    message.groupByColumns[i] = String(object.groupByColumns[i]);
            }
            if (object.metricsExpression) {
                if (!Array.isArray(object.metricsExpression))
                    throw TypeError(".conversation.GeneratedSQLQueryParts.metricsExpression: array expected");
                message.metricsExpression = [];
                for (let i = 0; i < object.metricsExpression.length; ++i)
                    message.metricsExpression[i] = String(object.metricsExpression[i]);
            }
            if (object.limit != null)
                message.limit = String(object.limit);
            if (object.orderBy != null)
                message.orderBy = String(object.orderBy);
            return message;
        };

        /**
         * Creates a plain object from a GeneratedSQLQueryParts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {conversation.GeneratedSQLQueryParts} message GeneratedSQLQueryParts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneratedSQLQueryParts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.groupByColumns = [];
                object.metricsExpression = [];
            }
            if (options.defaults) {
                object.megaTableWithStatement = "";
                object.megaTableAggregatedWithStatement = "";
                object.generatedSql = "";
                object.generatedSqlWithoutMegatableSchema = "";
                object.whereClause = "";
                object.limit = "";
                object.orderBy = "";
            }
            if (message.megaTableWithStatement != null && message.hasOwnProperty("megaTableWithStatement"))
                object.megaTableWithStatement = message.megaTableWithStatement;
            if (message.megaTableAggregatedWithStatement != null && message.hasOwnProperty("megaTableAggregatedWithStatement"))
                object.megaTableAggregatedWithStatement = message.megaTableAggregatedWithStatement;
            if (message.generatedSql != null && message.hasOwnProperty("generatedSql"))
                object.generatedSql = message.generatedSql;
            if (message.generatedSqlWithoutMegatableSchema != null && message.hasOwnProperty("generatedSqlWithoutMegatableSchema"))
                object.generatedSqlWithoutMegatableSchema = message.generatedSqlWithoutMegatableSchema;
            if (message.whereClause != null && message.hasOwnProperty("whereClause"))
                object.whereClause = message.whereClause;
            if (message.groupByColumns && message.groupByColumns.length) {
                object.groupByColumns = [];
                for (let j = 0; j < message.groupByColumns.length; ++j)
                    object.groupByColumns[j] = message.groupByColumns[j];
            }
            if (message.metricsExpression && message.metricsExpression.length) {
                object.metricsExpression = [];
                for (let j = 0; j < message.metricsExpression.length; ++j)
                    object.metricsExpression[j] = message.metricsExpression[j];
            }
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.orderBy != null && message.hasOwnProperty("orderBy"))
                object.orderBy = message.orderBy;
            return object;
        };

        /**
         * Converts this GeneratedSQLQueryParts to JSON.
         * @function toJSON
         * @memberof conversation.GeneratedSQLQueryParts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneratedSQLQueryParts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GeneratedSQLQueryParts
         * @function getTypeUrl
         * @memberof conversation.GeneratedSQLQueryParts
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GeneratedSQLQueryParts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.GeneratedSQLQueryParts";
        };

        return GeneratedSQLQueryParts;
    })();

    conversation.MegaTableSchema = (function() {

        /**
         * Properties of a MegaTableSchema.
         * @memberof conversation
         * @interface IMegaTableSchema
         * @property {string|null} [name] MegaTableSchema name
         * @property {Array.<conversation.IMegaTableSchemaColumn>|null} [columns] MegaTableSchema columns
         * @property {string|null} [megaTableWithStatement] MegaTableSchema megaTableWithStatement
         * @property {Array.<conversation.IMegaTableIndividualTableInformation>|null} [tableInformation] MegaTableSchema tableInformation
         * @property {string|null} [baseTableName] MegaTableSchema baseTableName
         * @property {Array.<conversation.IMegaTableSchemaColumn>|null} [allColumnsInTable] MegaTableSchema allColumnsInTable
         */

        /**
         * Constructs a new MegaTableSchema.
         * @memberof conversation
         * @classdesc Represents a MegaTableSchema.
         * @implements IMegaTableSchema
         * @constructor
         * @param {conversation.IMegaTableSchema=} [properties] Properties to set
         */
        function MegaTableSchema(properties) {
            this.columns = [];
            this.tableInformation = [];
            this.allColumnsInTable = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MegaTableSchema name.
         * @member {string} name
         * @memberof conversation.MegaTableSchema
         * @instance
         */
        MegaTableSchema.prototype.name = "";

        /**
         * MegaTableSchema columns.
         * @member {Array.<conversation.IMegaTableSchemaColumn>} columns
         * @memberof conversation.MegaTableSchema
         * @instance
         */
        MegaTableSchema.prototype.columns = $util.emptyArray;

        /**
         * MegaTableSchema megaTableWithStatement.
         * @member {string} megaTableWithStatement
         * @memberof conversation.MegaTableSchema
         * @instance
         */
        MegaTableSchema.prototype.megaTableWithStatement = "";

        /**
         * MegaTableSchema tableInformation.
         * @member {Array.<conversation.IMegaTableIndividualTableInformation>} tableInformation
         * @memberof conversation.MegaTableSchema
         * @instance
         */
        MegaTableSchema.prototype.tableInformation = $util.emptyArray;

        /**
         * MegaTableSchema baseTableName.
         * @member {string} baseTableName
         * @memberof conversation.MegaTableSchema
         * @instance
         */
        MegaTableSchema.prototype.baseTableName = "";

        /**
         * MegaTableSchema allColumnsInTable.
         * @member {Array.<conversation.IMegaTableSchemaColumn>} allColumnsInTable
         * @memberof conversation.MegaTableSchema
         * @instance
         */
        MegaTableSchema.prototype.allColumnsInTable = $util.emptyArray;

        /**
         * Creates a new MegaTableSchema instance using the specified properties.
         * @function create
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {conversation.IMegaTableSchema=} [properties] Properties to set
         * @returns {conversation.MegaTableSchema} MegaTableSchema instance
         */
        MegaTableSchema.create = function create(properties) {
            return new MegaTableSchema(properties);
        };

        /**
         * Encodes the specified MegaTableSchema message. Does not implicitly {@link conversation.MegaTableSchema.verify|verify} messages.
         * @function encode
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {conversation.IMegaTableSchema} message MegaTableSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableSchema.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.conversation.MegaTableSchemaColumn.encode(message.columns[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.megaTableWithStatement != null && Object.hasOwnProperty.call(message, "megaTableWithStatement"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.megaTableWithStatement);
            if (message.tableInformation != null && message.tableInformation.length)
                for (let i = 0; i < message.tableInformation.length; ++i)
                    $root.conversation.MegaTableIndividualTableInformation.encode(message.tableInformation[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.baseTableName != null && Object.hasOwnProperty.call(message, "baseTableName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.baseTableName);
            if (message.allColumnsInTable != null && message.allColumnsInTable.length)
                for (let i = 0; i < message.allColumnsInTable.length; ++i)
                    $root.conversation.MegaTableSchemaColumn.encode(message.allColumnsInTable[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MegaTableSchema message, length delimited. Does not implicitly {@link conversation.MegaTableSchema.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {conversation.IMegaTableSchema} message MegaTableSchema message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableSchema.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MegaTableSchema message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.MegaTableSchema} MegaTableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableSchema.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.MegaTableSchema();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.columns && message.columns.length))
                            message.columns = [];
                        message.columns.push($root.conversation.MegaTableSchemaColumn.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.megaTableWithStatement = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.tableInformation && message.tableInformation.length))
                            message.tableInformation = [];
                        message.tableInformation.push($root.conversation.MegaTableIndividualTableInformation.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.baseTableName = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.allColumnsInTable && message.allColumnsInTable.length))
                            message.allColumnsInTable = [];
                        message.allColumnsInTable.push($root.conversation.MegaTableSchemaColumn.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MegaTableSchema message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.MegaTableSchema} MegaTableSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableSchema.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MegaTableSchema message.
         * @function verify
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MegaTableSchema.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.conversation.MegaTableSchemaColumn.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            if (message.megaTableWithStatement != null && message.hasOwnProperty("megaTableWithStatement"))
                if (!$util.isString(message.megaTableWithStatement))
                    return "megaTableWithStatement: string expected";
            if (message.tableInformation != null && message.hasOwnProperty("tableInformation")) {
                if (!Array.isArray(message.tableInformation))
                    return "tableInformation: array expected";
                for (let i = 0; i < message.tableInformation.length; ++i) {
                    let error = $root.conversation.MegaTableIndividualTableInformation.verify(message.tableInformation[i]);
                    if (error)
                        return "tableInformation." + error;
                }
            }
            if (message.baseTableName != null && message.hasOwnProperty("baseTableName"))
                if (!$util.isString(message.baseTableName))
                    return "baseTableName: string expected";
            if (message.allColumnsInTable != null && message.hasOwnProperty("allColumnsInTable")) {
                if (!Array.isArray(message.allColumnsInTable))
                    return "allColumnsInTable: array expected";
                for (let i = 0; i < message.allColumnsInTable.length; ++i) {
                    let error = $root.conversation.MegaTableSchemaColumn.verify(message.allColumnsInTable[i]);
                    if (error)
                        return "allColumnsInTable." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MegaTableSchema message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.MegaTableSchema} MegaTableSchema
         */
        MegaTableSchema.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.MegaTableSchema)
                return object;
            let message = new $root.conversation.MegaTableSchema();
            if (object.name != null)
                message.name = String(object.name);
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".conversation.MegaTableSchema.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".conversation.MegaTableSchema.columns: object expected");
                    message.columns[i] = $root.conversation.MegaTableSchemaColumn.fromObject(object.columns[i]);
                }
            }
            if (object.megaTableWithStatement != null)
                message.megaTableWithStatement = String(object.megaTableWithStatement);
            if (object.tableInformation) {
                if (!Array.isArray(object.tableInformation))
                    throw TypeError(".conversation.MegaTableSchema.tableInformation: array expected");
                message.tableInformation = [];
                for (let i = 0; i < object.tableInformation.length; ++i) {
                    if (typeof object.tableInformation[i] !== "object")
                        throw TypeError(".conversation.MegaTableSchema.tableInformation: object expected");
                    message.tableInformation[i] = $root.conversation.MegaTableIndividualTableInformation.fromObject(object.tableInformation[i]);
                }
            }
            if (object.baseTableName != null)
                message.baseTableName = String(object.baseTableName);
            if (object.allColumnsInTable) {
                if (!Array.isArray(object.allColumnsInTable))
                    throw TypeError(".conversation.MegaTableSchema.allColumnsInTable: array expected");
                message.allColumnsInTable = [];
                for (let i = 0; i < object.allColumnsInTable.length; ++i) {
                    if (typeof object.allColumnsInTable[i] !== "object")
                        throw TypeError(".conversation.MegaTableSchema.allColumnsInTable: object expected");
                    message.allColumnsInTable[i] = $root.conversation.MegaTableSchemaColumn.fromObject(object.allColumnsInTable[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MegaTableSchema message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {conversation.MegaTableSchema} message MegaTableSchema
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MegaTableSchema.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.columns = [];
                object.tableInformation = [];
                object.allColumnsInTable = [];
            }
            if (options.defaults) {
                object.name = "";
                object.megaTableWithStatement = "";
                object.baseTableName = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.conversation.MegaTableSchemaColumn.toObject(message.columns[j], options);
            }
            if (message.megaTableWithStatement != null && message.hasOwnProperty("megaTableWithStatement"))
                object.megaTableWithStatement = message.megaTableWithStatement;
            if (message.tableInformation && message.tableInformation.length) {
                object.tableInformation = [];
                for (let j = 0; j < message.tableInformation.length; ++j)
                    object.tableInformation[j] = $root.conversation.MegaTableIndividualTableInformation.toObject(message.tableInformation[j], options);
            }
            if (message.baseTableName != null && message.hasOwnProperty("baseTableName"))
                object.baseTableName = message.baseTableName;
            if (message.allColumnsInTable && message.allColumnsInTable.length) {
                object.allColumnsInTable = [];
                for (let j = 0; j < message.allColumnsInTable.length; ++j)
                    object.allColumnsInTable[j] = $root.conversation.MegaTableSchemaColumn.toObject(message.allColumnsInTable[j], options);
            }
            return object;
        };

        /**
         * Converts this MegaTableSchema to JSON.
         * @function toJSON
         * @memberof conversation.MegaTableSchema
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MegaTableSchema.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MegaTableSchema
         * @function getTypeUrl
         * @memberof conversation.MegaTableSchema
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MegaTableSchema.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.MegaTableSchema";
        };

        return MegaTableSchema;
    })();

    conversation.MegaTableIndividualTableInformation = (function() {

        /**
         * Properties of a MegaTableIndividualTableInformation.
         * @memberof conversation
         * @interface IMegaTableIndividualTableInformation
         * @property {string|null} [tableName] MegaTableIndividualTableInformation tableName
         * @property {string|null} [workspace] MegaTableIndividualTableInformation workspace
         * @property {string|null} [viewName] MegaTableIndividualTableInformation viewName
         * @property {string|null} [primaryKey] MegaTableIndividualTableInformation primaryKey
         * @property {string|null} [columnOnMainTableToJoin] MegaTableIndividualTableInformation columnOnMainTableToJoin
         * @property {Array.<conversation.IMegaTableColumnInfomrationInTable>|null} [columnNameInView] MegaTableIndividualTableInformation columnNameInView
         * @property {Array.<string>|null} [columnsOnMainTableToJoin] MegaTableIndividualTableInformation columnsOnMainTableToJoin
         * @property {Array.<string>|null} [columnsOnTableWhichNeedToJoin] MegaTableIndividualTableInformation columnsOnTableWhichNeedToJoin
         */

        /**
         * Constructs a new MegaTableIndividualTableInformation.
         * @memberof conversation
         * @classdesc Represents a MegaTableIndividualTableInformation.
         * @implements IMegaTableIndividualTableInformation
         * @constructor
         * @param {conversation.IMegaTableIndividualTableInformation=} [properties] Properties to set
         */
        function MegaTableIndividualTableInformation(properties) {
            this.columnNameInView = [];
            this.columnsOnMainTableToJoin = [];
            this.columnsOnTableWhichNeedToJoin = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MegaTableIndividualTableInformation tableName.
         * @member {string} tableName
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.tableName = "";

        /**
         * MegaTableIndividualTableInformation workspace.
         * @member {string} workspace
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.workspace = "";

        /**
         * MegaTableIndividualTableInformation viewName.
         * @member {string} viewName
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.viewName = "";

        /**
         * MegaTableIndividualTableInformation primaryKey.
         * @member {string} primaryKey
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.primaryKey = "";

        /**
         * MegaTableIndividualTableInformation columnOnMainTableToJoin.
         * @member {string} columnOnMainTableToJoin
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.columnOnMainTableToJoin = "";

        /**
         * MegaTableIndividualTableInformation columnNameInView.
         * @member {Array.<conversation.IMegaTableColumnInfomrationInTable>} columnNameInView
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.columnNameInView = $util.emptyArray;

        /**
         * MegaTableIndividualTableInformation columnsOnMainTableToJoin.
         * @member {Array.<string>} columnsOnMainTableToJoin
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.columnsOnMainTableToJoin = $util.emptyArray;

        /**
         * MegaTableIndividualTableInformation columnsOnTableWhichNeedToJoin.
         * @member {Array.<string>} columnsOnTableWhichNeedToJoin
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         */
        MegaTableIndividualTableInformation.prototype.columnsOnTableWhichNeedToJoin = $util.emptyArray;

        /**
         * Creates a new MegaTableIndividualTableInformation instance using the specified properties.
         * @function create
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {conversation.IMegaTableIndividualTableInformation=} [properties] Properties to set
         * @returns {conversation.MegaTableIndividualTableInformation} MegaTableIndividualTableInformation instance
         */
        MegaTableIndividualTableInformation.create = function create(properties) {
            return new MegaTableIndividualTableInformation(properties);
        };

        /**
         * Encodes the specified MegaTableIndividualTableInformation message. Does not implicitly {@link conversation.MegaTableIndividualTableInformation.verify|verify} messages.
         * @function encode
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {conversation.IMegaTableIndividualTableInformation} message MegaTableIndividualTableInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableIndividualTableInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableName != null && Object.hasOwnProperty.call(message, "tableName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableName);
            if (message.workspace != null && Object.hasOwnProperty.call(message, "workspace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.workspace);
            if (message.viewName != null && Object.hasOwnProperty.call(message, "viewName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.viewName);
            if (message.primaryKey != null && Object.hasOwnProperty.call(message, "primaryKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.primaryKey);
            if (message.columnOnMainTableToJoin != null && Object.hasOwnProperty.call(message, "columnOnMainTableToJoin"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.columnOnMainTableToJoin);
            if (message.columnNameInView != null && message.columnNameInView.length)
                for (let i = 0; i < message.columnNameInView.length; ++i)
                    $root.conversation.MegaTableColumnInfomrationInTable.encode(message.columnNameInView[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.columnsOnMainTableToJoin != null && message.columnsOnMainTableToJoin.length)
                for (let i = 0; i < message.columnsOnMainTableToJoin.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.columnsOnMainTableToJoin[i]);
            if (message.columnsOnTableWhichNeedToJoin != null && message.columnsOnTableWhichNeedToJoin.length)
                for (let i = 0; i < message.columnsOnTableWhichNeedToJoin.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.columnsOnTableWhichNeedToJoin[i]);
            return writer;
        };

        /**
         * Encodes the specified MegaTableIndividualTableInformation message, length delimited. Does not implicitly {@link conversation.MegaTableIndividualTableInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {conversation.IMegaTableIndividualTableInformation} message MegaTableIndividualTableInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableIndividualTableInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MegaTableIndividualTableInformation message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.MegaTableIndividualTableInformation} MegaTableIndividualTableInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableIndividualTableInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.MegaTableIndividualTableInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableName = reader.string();
                        break;
                    }
                case 2: {
                        message.workspace = reader.string();
                        break;
                    }
                case 3: {
                        message.viewName = reader.string();
                        break;
                    }
                case 4: {
                        message.primaryKey = reader.string();
                        break;
                    }
                case 5: {
                        message.columnOnMainTableToJoin = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.columnNameInView && message.columnNameInView.length))
                            message.columnNameInView = [];
                        message.columnNameInView.push($root.conversation.MegaTableColumnInfomrationInTable.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.columnsOnMainTableToJoin && message.columnsOnMainTableToJoin.length))
                            message.columnsOnMainTableToJoin = [];
                        message.columnsOnMainTableToJoin.push(reader.string());
                        break;
                    }
                case 8: {
                        if (!(message.columnsOnTableWhichNeedToJoin && message.columnsOnTableWhichNeedToJoin.length))
                            message.columnsOnTableWhichNeedToJoin = [];
                        message.columnsOnTableWhichNeedToJoin.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MegaTableIndividualTableInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.MegaTableIndividualTableInformation} MegaTableIndividualTableInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableIndividualTableInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MegaTableIndividualTableInformation message.
         * @function verify
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MegaTableIndividualTableInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableName != null && message.hasOwnProperty("tableName"))
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                if (!$util.isString(message.workspace))
                    return "workspace: string expected";
            if (message.viewName != null && message.hasOwnProperty("viewName"))
                if (!$util.isString(message.viewName))
                    return "viewName: string expected";
            if (message.primaryKey != null && message.hasOwnProperty("primaryKey"))
                if (!$util.isString(message.primaryKey))
                    return "primaryKey: string expected";
            if (message.columnOnMainTableToJoin != null && message.hasOwnProperty("columnOnMainTableToJoin"))
                if (!$util.isString(message.columnOnMainTableToJoin))
                    return "columnOnMainTableToJoin: string expected";
            if (message.columnNameInView != null && message.hasOwnProperty("columnNameInView")) {
                if (!Array.isArray(message.columnNameInView))
                    return "columnNameInView: array expected";
                for (let i = 0; i < message.columnNameInView.length; ++i) {
                    let error = $root.conversation.MegaTableColumnInfomrationInTable.verify(message.columnNameInView[i]);
                    if (error)
                        return "columnNameInView." + error;
                }
            }
            if (message.columnsOnMainTableToJoin != null && message.hasOwnProperty("columnsOnMainTableToJoin")) {
                if (!Array.isArray(message.columnsOnMainTableToJoin))
                    return "columnsOnMainTableToJoin: array expected";
                for (let i = 0; i < message.columnsOnMainTableToJoin.length; ++i)
                    if (!$util.isString(message.columnsOnMainTableToJoin[i]))
                        return "columnsOnMainTableToJoin: string[] expected";
            }
            if (message.columnsOnTableWhichNeedToJoin != null && message.hasOwnProperty("columnsOnTableWhichNeedToJoin")) {
                if (!Array.isArray(message.columnsOnTableWhichNeedToJoin))
                    return "columnsOnTableWhichNeedToJoin: array expected";
                for (let i = 0; i < message.columnsOnTableWhichNeedToJoin.length; ++i)
                    if (!$util.isString(message.columnsOnTableWhichNeedToJoin[i]))
                        return "columnsOnTableWhichNeedToJoin: string[] expected";
            }
            return null;
        };

        /**
         * Creates a MegaTableIndividualTableInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.MegaTableIndividualTableInformation} MegaTableIndividualTableInformation
         */
        MegaTableIndividualTableInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.MegaTableIndividualTableInformation)
                return object;
            let message = new $root.conversation.MegaTableIndividualTableInformation();
            if (object.tableName != null)
                message.tableName = String(object.tableName);
            if (object.workspace != null)
                message.workspace = String(object.workspace);
            if (object.viewName != null)
                message.viewName = String(object.viewName);
            if (object.primaryKey != null)
                message.primaryKey = String(object.primaryKey);
            if (object.columnOnMainTableToJoin != null)
                message.columnOnMainTableToJoin = String(object.columnOnMainTableToJoin);
            if (object.columnNameInView) {
                if (!Array.isArray(object.columnNameInView))
                    throw TypeError(".conversation.MegaTableIndividualTableInformation.columnNameInView: array expected");
                message.columnNameInView = [];
                for (let i = 0; i < object.columnNameInView.length; ++i) {
                    if (typeof object.columnNameInView[i] !== "object")
                        throw TypeError(".conversation.MegaTableIndividualTableInformation.columnNameInView: object expected");
                    message.columnNameInView[i] = $root.conversation.MegaTableColumnInfomrationInTable.fromObject(object.columnNameInView[i]);
                }
            }
            if (object.columnsOnMainTableToJoin) {
                if (!Array.isArray(object.columnsOnMainTableToJoin))
                    throw TypeError(".conversation.MegaTableIndividualTableInformation.columnsOnMainTableToJoin: array expected");
                message.columnsOnMainTableToJoin = [];
                for (let i = 0; i < object.columnsOnMainTableToJoin.length; ++i)
                    message.columnsOnMainTableToJoin[i] = String(object.columnsOnMainTableToJoin[i]);
            }
            if (object.columnsOnTableWhichNeedToJoin) {
                if (!Array.isArray(object.columnsOnTableWhichNeedToJoin))
                    throw TypeError(".conversation.MegaTableIndividualTableInformation.columnsOnTableWhichNeedToJoin: array expected");
                message.columnsOnTableWhichNeedToJoin = [];
                for (let i = 0; i < object.columnsOnTableWhichNeedToJoin.length; ++i)
                    message.columnsOnTableWhichNeedToJoin[i] = String(object.columnsOnTableWhichNeedToJoin[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a MegaTableIndividualTableInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {conversation.MegaTableIndividualTableInformation} message MegaTableIndividualTableInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MegaTableIndividualTableInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.columnNameInView = [];
                object.columnsOnMainTableToJoin = [];
                object.columnsOnTableWhichNeedToJoin = [];
            }
            if (options.defaults) {
                object.tableName = "";
                object.workspace = "";
                object.viewName = "";
                object.primaryKey = "";
                object.columnOnMainTableToJoin = "";
            }
            if (message.tableName != null && message.hasOwnProperty("tableName"))
                object.tableName = message.tableName;
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                object.workspace = message.workspace;
            if (message.viewName != null && message.hasOwnProperty("viewName"))
                object.viewName = message.viewName;
            if (message.primaryKey != null && message.hasOwnProperty("primaryKey"))
                object.primaryKey = message.primaryKey;
            if (message.columnOnMainTableToJoin != null && message.hasOwnProperty("columnOnMainTableToJoin"))
                object.columnOnMainTableToJoin = message.columnOnMainTableToJoin;
            if (message.columnNameInView && message.columnNameInView.length) {
                object.columnNameInView = [];
                for (let j = 0; j < message.columnNameInView.length; ++j)
                    object.columnNameInView[j] = $root.conversation.MegaTableColumnInfomrationInTable.toObject(message.columnNameInView[j], options);
            }
            if (message.columnsOnMainTableToJoin && message.columnsOnMainTableToJoin.length) {
                object.columnsOnMainTableToJoin = [];
                for (let j = 0; j < message.columnsOnMainTableToJoin.length; ++j)
                    object.columnsOnMainTableToJoin[j] = message.columnsOnMainTableToJoin[j];
            }
            if (message.columnsOnTableWhichNeedToJoin && message.columnsOnTableWhichNeedToJoin.length) {
                object.columnsOnTableWhichNeedToJoin = [];
                for (let j = 0; j < message.columnsOnTableWhichNeedToJoin.length; ++j)
                    object.columnsOnTableWhichNeedToJoin[j] = message.columnsOnTableWhichNeedToJoin[j];
            }
            return object;
        };

        /**
         * Converts this MegaTableIndividualTableInformation to JSON.
         * @function toJSON
         * @memberof conversation.MegaTableIndividualTableInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MegaTableIndividualTableInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MegaTableIndividualTableInformation
         * @function getTypeUrl
         * @memberof conversation.MegaTableIndividualTableInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MegaTableIndividualTableInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.MegaTableIndividualTableInformation";
        };

        return MegaTableIndividualTableInformation;
    })();

    conversation.MegaTableColumnInfomrationInTable = (function() {

        /**
         * Properties of a MegaTableColumnInfomrationInTable.
         * @memberof conversation
         * @interface IMegaTableColumnInfomrationInTable
         * @property {string|null} [columnName] MegaTableColumnInfomrationInTable columnName
         * @property {string|null} [columnNameInView] MegaTableColumnInfomrationInTable columnNameInView
         */

        /**
         * Constructs a new MegaTableColumnInfomrationInTable.
         * @memberof conversation
         * @classdesc Represents a MegaTableColumnInfomrationInTable.
         * @implements IMegaTableColumnInfomrationInTable
         * @constructor
         * @param {conversation.IMegaTableColumnInfomrationInTable=} [properties] Properties to set
         */
        function MegaTableColumnInfomrationInTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MegaTableColumnInfomrationInTable columnName.
         * @member {string} columnName
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @instance
         */
        MegaTableColumnInfomrationInTable.prototype.columnName = "";

        /**
         * MegaTableColumnInfomrationInTable columnNameInView.
         * @member {string} columnNameInView
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @instance
         */
        MegaTableColumnInfomrationInTable.prototype.columnNameInView = "";

        /**
         * Creates a new MegaTableColumnInfomrationInTable instance using the specified properties.
         * @function create
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {conversation.IMegaTableColumnInfomrationInTable=} [properties] Properties to set
         * @returns {conversation.MegaTableColumnInfomrationInTable} MegaTableColumnInfomrationInTable instance
         */
        MegaTableColumnInfomrationInTable.create = function create(properties) {
            return new MegaTableColumnInfomrationInTable(properties);
        };

        /**
         * Encodes the specified MegaTableColumnInfomrationInTable message. Does not implicitly {@link conversation.MegaTableColumnInfomrationInTable.verify|verify} messages.
         * @function encode
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {conversation.IMegaTableColumnInfomrationInTable} message MegaTableColumnInfomrationInTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableColumnInfomrationInTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columnName != null && Object.hasOwnProperty.call(message, "columnName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.columnName);
            if (message.columnNameInView != null && Object.hasOwnProperty.call(message, "columnNameInView"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.columnNameInView);
            return writer;
        };

        /**
         * Encodes the specified MegaTableColumnInfomrationInTable message, length delimited. Does not implicitly {@link conversation.MegaTableColumnInfomrationInTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {conversation.IMegaTableColumnInfomrationInTable} message MegaTableColumnInfomrationInTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableColumnInfomrationInTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MegaTableColumnInfomrationInTable message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.MegaTableColumnInfomrationInTable} MegaTableColumnInfomrationInTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableColumnInfomrationInTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.MegaTableColumnInfomrationInTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.columnName = reader.string();
                        break;
                    }
                case 2: {
                        message.columnNameInView = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MegaTableColumnInfomrationInTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.MegaTableColumnInfomrationInTable} MegaTableColumnInfomrationInTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableColumnInfomrationInTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MegaTableColumnInfomrationInTable message.
         * @function verify
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MegaTableColumnInfomrationInTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.columnName != null && message.hasOwnProperty("columnName"))
                if (!$util.isString(message.columnName))
                    return "columnName: string expected";
            if (message.columnNameInView != null && message.hasOwnProperty("columnNameInView"))
                if (!$util.isString(message.columnNameInView))
                    return "columnNameInView: string expected";
            return null;
        };

        /**
         * Creates a MegaTableColumnInfomrationInTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.MegaTableColumnInfomrationInTable} MegaTableColumnInfomrationInTable
         */
        MegaTableColumnInfomrationInTable.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.MegaTableColumnInfomrationInTable)
                return object;
            let message = new $root.conversation.MegaTableColumnInfomrationInTable();
            if (object.columnName != null)
                message.columnName = String(object.columnName);
            if (object.columnNameInView != null)
                message.columnNameInView = String(object.columnNameInView);
            return message;
        };

        /**
         * Creates a plain object from a MegaTableColumnInfomrationInTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {conversation.MegaTableColumnInfomrationInTable} message MegaTableColumnInfomrationInTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MegaTableColumnInfomrationInTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.columnName = "";
                object.columnNameInView = "";
            }
            if (message.columnName != null && message.hasOwnProperty("columnName"))
                object.columnName = message.columnName;
            if (message.columnNameInView != null && message.hasOwnProperty("columnNameInView"))
                object.columnNameInView = message.columnNameInView;
            return object;
        };

        /**
         * Converts this MegaTableColumnInfomrationInTable to JSON.
         * @function toJSON
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MegaTableColumnInfomrationInTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MegaTableColumnInfomrationInTable
         * @function getTypeUrl
         * @memberof conversation.MegaTableColumnInfomrationInTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MegaTableColumnInfomrationInTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.MegaTableColumnInfomrationInTable";
        };

        return MegaTableColumnInfomrationInTable;
    })();

    conversation.MegaTableSchemaColumn = (function() {

        /**
         * Properties of a MegaTableSchemaColumn.
         * @memberof conversation
         * @interface IMegaTableSchemaColumn
         * @property {string|null} [name] MegaTableSchemaColumn name
         * @property {string|null} [type] MegaTableSchemaColumn type
         * @property {Array.<string>|null} [topNItems] MegaTableSchemaColumn topNItems
         * @property {boolean|null} [isDimension] MegaTableSchemaColumn isDimension
         * @property {boolean|null} [isRepeated] MegaTableSchemaColumn isRepeated
         * @property {string|null} [originalName] MegaTableSchemaColumn originalName
         * @property {boolean|null} [isPii] MegaTableSchemaColumn isPii
         */

        /**
         * Constructs a new MegaTableSchemaColumn.
         * @memberof conversation
         * @classdesc Represents a MegaTableSchemaColumn.
         * @implements IMegaTableSchemaColumn
         * @constructor
         * @param {conversation.IMegaTableSchemaColumn=} [properties] Properties to set
         */
        function MegaTableSchemaColumn(properties) {
            this.topNItems = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MegaTableSchemaColumn name.
         * @member {string} name
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.name = "";

        /**
         * MegaTableSchemaColumn type.
         * @member {string} type
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.type = "";

        /**
         * MegaTableSchemaColumn topNItems.
         * @member {Array.<string>} topNItems
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.topNItems = $util.emptyArray;

        /**
         * MegaTableSchemaColumn isDimension.
         * @member {boolean} isDimension
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.isDimension = false;

        /**
         * MegaTableSchemaColumn isRepeated.
         * @member {boolean} isRepeated
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.isRepeated = false;

        /**
         * MegaTableSchemaColumn originalName.
         * @member {string} originalName
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.originalName = "";

        /**
         * MegaTableSchemaColumn isPii.
         * @member {boolean} isPii
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         */
        MegaTableSchemaColumn.prototype.isPii = false;

        /**
         * Creates a new MegaTableSchemaColumn instance using the specified properties.
         * @function create
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {conversation.IMegaTableSchemaColumn=} [properties] Properties to set
         * @returns {conversation.MegaTableSchemaColumn} MegaTableSchemaColumn instance
         */
        MegaTableSchemaColumn.create = function create(properties) {
            return new MegaTableSchemaColumn(properties);
        };

        /**
         * Encodes the specified MegaTableSchemaColumn message. Does not implicitly {@link conversation.MegaTableSchemaColumn.verify|verify} messages.
         * @function encode
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {conversation.IMegaTableSchemaColumn} message MegaTableSchemaColumn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableSchemaColumn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.topNItems != null && message.topNItems.length)
                for (let i = 0; i < message.topNItems.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.topNItems[i]);
            if (message.isDimension != null && Object.hasOwnProperty.call(message, "isDimension"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isDimension);
            if (message.isRepeated != null && Object.hasOwnProperty.call(message, "isRepeated"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isRepeated);
            if (message.originalName != null && Object.hasOwnProperty.call(message, "originalName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.originalName);
            if (message.isPii != null && Object.hasOwnProperty.call(message, "isPii"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isPii);
            return writer;
        };

        /**
         * Encodes the specified MegaTableSchemaColumn message, length delimited. Does not implicitly {@link conversation.MegaTableSchemaColumn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {conversation.IMegaTableSchemaColumn} message MegaTableSchemaColumn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MegaTableSchemaColumn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MegaTableSchemaColumn message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.MegaTableSchemaColumn} MegaTableSchemaColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableSchemaColumn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.MegaTableSchemaColumn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.topNItems && message.topNItems.length))
                            message.topNItems = [];
                        message.topNItems.push(reader.string());
                        break;
                    }
                case 4: {
                        message.isDimension = reader.bool();
                        break;
                    }
                case 5: {
                        message.isRepeated = reader.bool();
                        break;
                    }
                case 6: {
                        message.originalName = reader.string();
                        break;
                    }
                case 7: {
                        message.isPii = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MegaTableSchemaColumn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.MegaTableSchemaColumn} MegaTableSchemaColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MegaTableSchemaColumn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MegaTableSchemaColumn message.
         * @function verify
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MegaTableSchemaColumn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.topNItems != null && message.hasOwnProperty("topNItems")) {
                if (!Array.isArray(message.topNItems))
                    return "topNItems: array expected";
                for (let i = 0; i < message.topNItems.length; ++i)
                    if (!$util.isString(message.topNItems[i]))
                        return "topNItems: string[] expected";
            }
            if (message.isDimension != null && message.hasOwnProperty("isDimension"))
                if (typeof message.isDimension !== "boolean")
                    return "isDimension: boolean expected";
            if (message.isRepeated != null && message.hasOwnProperty("isRepeated"))
                if (typeof message.isRepeated !== "boolean")
                    return "isRepeated: boolean expected";
            if (message.originalName != null && message.hasOwnProperty("originalName"))
                if (!$util.isString(message.originalName))
                    return "originalName: string expected";
            if (message.isPii != null && message.hasOwnProperty("isPii"))
                if (typeof message.isPii !== "boolean")
                    return "isPii: boolean expected";
            return null;
        };

        /**
         * Creates a MegaTableSchemaColumn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.MegaTableSchemaColumn} MegaTableSchemaColumn
         */
        MegaTableSchemaColumn.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.MegaTableSchemaColumn)
                return object;
            let message = new $root.conversation.MegaTableSchemaColumn();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            if (object.topNItems) {
                if (!Array.isArray(object.topNItems))
                    throw TypeError(".conversation.MegaTableSchemaColumn.topNItems: array expected");
                message.topNItems = [];
                for (let i = 0; i < object.topNItems.length; ++i)
                    message.topNItems[i] = String(object.topNItems[i]);
            }
            if (object.isDimension != null)
                message.isDimension = Boolean(object.isDimension);
            if (object.isRepeated != null)
                message.isRepeated = Boolean(object.isRepeated);
            if (object.originalName != null)
                message.originalName = String(object.originalName);
            if (object.isPii != null)
                message.isPii = Boolean(object.isPii);
            return message;
        };

        /**
         * Creates a plain object from a MegaTableSchemaColumn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {conversation.MegaTableSchemaColumn} message MegaTableSchemaColumn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MegaTableSchemaColumn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.topNItems = [];
            if (options.defaults) {
                object.name = "";
                object.type = "";
                object.isDimension = false;
                object.isRepeated = false;
                object.originalName = "";
                object.isPii = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.topNItems && message.topNItems.length) {
                object.topNItems = [];
                for (let j = 0; j < message.topNItems.length; ++j)
                    object.topNItems[j] = message.topNItems[j];
            }
            if (message.isDimension != null && message.hasOwnProperty("isDimension"))
                object.isDimension = message.isDimension;
            if (message.isRepeated != null && message.hasOwnProperty("isRepeated"))
                object.isRepeated = message.isRepeated;
            if (message.originalName != null && message.hasOwnProperty("originalName"))
                object.originalName = message.originalName;
            if (message.isPii != null && message.hasOwnProperty("isPii"))
                object.isPii = message.isPii;
            return object;
        };

        /**
         * Converts this MegaTableSchemaColumn to JSON.
         * @function toJSON
         * @memberof conversation.MegaTableSchemaColumn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MegaTableSchemaColumn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MegaTableSchemaColumn
         * @function getTypeUrl
         * @memberof conversation.MegaTableSchemaColumn
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MegaTableSchemaColumn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.MegaTableSchemaColumn";
        };

        return MegaTableSchemaColumn;
    })();

    conversation.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof conversation
         * @interface IMessage
         * @property {string|null} [id] Message id
         * @property {string|null} [text] Message text
         * @property {string|null} [conversationId] Message conversationId
         * @property {number|null} [timestamp] Message timestamp
         * @property {number|null} [userId] Message userId
         * @property {conversation.BotState|null} [botState] Message botState
         * @property {conversation.IBotReply|null} [botReply] Message botReply
         * @property {conversation.ITicket|null} [ticket] Message ticket
         * @property {string|null} [sentByEmail] Message sentByEmail
         */

        /**
         * Constructs a new Message.
         * @memberof conversation
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {conversation.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message id.
         * @member {string} id
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.id = "";

        /**
         * Message text.
         * @member {string} text
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.text = "";

        /**
         * Message conversationId.
         * @member {string} conversationId
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.conversationId = "";

        /**
         * Message timestamp.
         * @member {number} timestamp
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.timestamp = 0;

        /**
         * Message userId.
         * @member {number} userId
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.userId = 0;

        /**
         * Message botState.
         * @member {conversation.BotState} botState
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.botState = 0;

        /**
         * Message botReply.
         * @member {conversation.IBotReply|null|undefined} botReply
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.botReply = null;

        /**
         * Message ticket.
         * @member {conversation.ITicket|null|undefined} ticket
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.ticket = null;

        /**
         * Message sentByEmail.
         * @member {string} sentByEmail
         * @memberof conversation.Message
         * @instance
         */
        Message.prototype.sentByEmail = "";

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof conversation.Message
         * @static
         * @param {conversation.IMessage=} [properties] Properties to set
         * @returns {conversation.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link conversation.Message.verify|verify} messages.
         * @function encode
         * @memberof conversation.Message
         * @static
         * @param {conversation.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.conversationId);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timestamp);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.userId);
            if (message.botState != null && Object.hasOwnProperty.call(message, "botState"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.botState);
            if (message.botReply != null && Object.hasOwnProperty.call(message, "botReply"))
                $root.conversation.BotReply.encode(message.botReply, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                $root.conversation.Ticket.encode(message.ticket, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.sentByEmail != null && Object.hasOwnProperty.call(message, "sentByEmail"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.sentByEmail);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link conversation.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.Message
         * @static
         * @param {conversation.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.text = reader.string();
                        break;
                    }
                case 3: {
                        message.conversationId = reader.string();
                        break;
                    }
                case 4: {
                        message.timestamp = reader.int32();
                        break;
                    }
                case 5: {
                        message.userId = reader.int32();
                        break;
                    }
                case 6: {
                        message.botState = reader.int32();
                        break;
                    }
                case 7: {
                        message.botReply = $root.conversation.BotReply.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.ticket = $root.conversation.Ticket.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.sentByEmail = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof conversation.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                if (!$util.isString(message.conversationId))
                    return "conversationId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.botState != null && message.hasOwnProperty("botState"))
                switch (message.botState) {
                default:
                    return "botState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.botReply != null && message.hasOwnProperty("botReply")) {
                let error = $root.conversation.BotReply.verify(message.botReply);
                if (error)
                    return "botReply." + error;
            }
            if (message.ticket != null && message.hasOwnProperty("ticket")) {
                let error = $root.conversation.Ticket.verify(message.ticket);
                if (error)
                    return "ticket." + error;
            }
            if (message.sentByEmail != null && message.hasOwnProperty("sentByEmail"))
                if (!$util.isString(message.sentByEmail))
                    return "sentByEmail: string expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.Message)
                return object;
            let message = new $root.conversation.Message();
            if (object.id != null)
                message.id = String(object.id);
            if (object.text != null)
                message.text = String(object.text);
            if (object.conversationId != null)
                message.conversationId = String(object.conversationId);
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            switch (object.botState) {
            default:
                if (typeof object.botState === "number") {
                    message.botState = object.botState;
                    break;
                }
                break;
            case "BotState_UNKNOWN":
            case 0:
                message.botState = 0;
                break;
            case "GenerateSQL":
            case 1:
                message.botState = 1;
                break;
            case "ExecuteSQL":
            case 2:
                message.botState = 2;
                break;
            case "WaitingForInput":
            case 3:
                message.botState = 3;
                break;
            }
            if (object.botReply != null) {
                if (typeof object.botReply !== "object")
                    throw TypeError(".conversation.Message.botReply: object expected");
                message.botReply = $root.conversation.BotReply.fromObject(object.botReply);
            }
            if (object.ticket != null) {
                if (typeof object.ticket !== "object")
                    throw TypeError(".conversation.Message.ticket: object expected");
                message.ticket = $root.conversation.Ticket.fromObject(object.ticket);
            }
            if (object.sentByEmail != null)
                message.sentByEmail = String(object.sentByEmail);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.Message
         * @static
         * @param {conversation.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.text = "";
                object.conversationId = "";
                object.timestamp = 0;
                object.userId = 0;
                object.botState = options.enums === String ? "BotState_UNKNOWN" : 0;
                object.botReply = null;
                object.ticket = null;
                object.sentByEmail = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                object.conversationId = message.conversationId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.botState != null && message.hasOwnProperty("botState"))
                object.botState = options.enums === String ? $root.conversation.BotState[message.botState] === undefined ? message.botState : $root.conversation.BotState[message.botState] : message.botState;
            if (message.botReply != null && message.hasOwnProperty("botReply"))
                object.botReply = $root.conversation.BotReply.toObject(message.botReply, options);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = $root.conversation.Ticket.toObject(message.ticket, options);
            if (message.sentByEmail != null && message.hasOwnProperty("sentByEmail"))
                object.sentByEmail = message.sentByEmail;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof conversation.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof conversation.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.Message";
        };

        return Message;
    })();

    conversation.BotReply = (function() {

        /**
         * Properties of a BotReply.
         * @memberof conversation
         * @interface IBotReply
         * @property {string|null} [messageId] BotReply messageId
         * @property {number|null} [startTime] BotReply startTime
         * @property {number|null} [endTime] BotReply endTime
         * @property {string|null} [generatedSql] BotReply generatedSql
         * @property {string|null} [generatedSqlExplanation] BotReply generatedSqlExplanation
         * @property {string|null} [sqlExecutionResult] BotReply sqlExecutionResult
         * @property {string|null} [megaTableWithStatement] BotReply megaTableWithStatement
         * @property {conversation.IMegaTableSchema|null} [megaTableSchema] BotReply megaTableSchema
         * @property {conversation.IGeneratedSQLQueryParts|null} [generatedSqlQueryParts] BotReply generatedSqlQueryParts
         * @property {string|null} [sqlExecutionResultHumanForm] BotReply sqlExecutionResultHumanForm
         * @property {Array.<conversation.IConversationGeneratedSQLInformation>|null} [conversationGeneratedSqlInformation] BotReply conversationGeneratedSqlInformation
         * @property {Array.<conversation.IBotReplyChip>|null} [botReplyChips] BotReply botReplyChips
         */

        /**
         * Constructs a new BotReply.
         * @memberof conversation
         * @classdesc Represents a BotReply.
         * @implements IBotReply
         * @constructor
         * @param {conversation.IBotReply=} [properties] Properties to set
         */
        function BotReply(properties) {
            this.conversationGeneratedSqlInformation = [];
            this.botReplyChips = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotReply messageId.
         * @member {string} messageId
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.messageId = "";

        /**
         * BotReply startTime.
         * @member {number} startTime
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.startTime = 0;

        /**
         * BotReply endTime.
         * @member {number} endTime
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.endTime = 0;

        /**
         * BotReply generatedSql.
         * @member {string} generatedSql
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.generatedSql = "";

        /**
         * BotReply generatedSqlExplanation.
         * @member {string} generatedSqlExplanation
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.generatedSqlExplanation = "";

        /**
         * BotReply sqlExecutionResult.
         * @member {string} sqlExecutionResult
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.sqlExecutionResult = "";

        /**
         * BotReply megaTableWithStatement.
         * @member {string} megaTableWithStatement
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.megaTableWithStatement = "";

        /**
         * BotReply megaTableSchema.
         * @member {conversation.IMegaTableSchema|null|undefined} megaTableSchema
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.megaTableSchema = null;

        /**
         * BotReply generatedSqlQueryParts.
         * @member {conversation.IGeneratedSQLQueryParts|null|undefined} generatedSqlQueryParts
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.generatedSqlQueryParts = null;

        /**
         * BotReply sqlExecutionResultHumanForm.
         * @member {string} sqlExecutionResultHumanForm
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.sqlExecutionResultHumanForm = "";

        /**
         * BotReply conversationGeneratedSqlInformation.
         * @member {Array.<conversation.IConversationGeneratedSQLInformation>} conversationGeneratedSqlInformation
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.conversationGeneratedSqlInformation = $util.emptyArray;

        /**
         * BotReply botReplyChips.
         * @member {Array.<conversation.IBotReplyChip>} botReplyChips
         * @memberof conversation.BotReply
         * @instance
         */
        BotReply.prototype.botReplyChips = $util.emptyArray;

        /**
         * Creates a new BotReply instance using the specified properties.
         * @function create
         * @memberof conversation.BotReply
         * @static
         * @param {conversation.IBotReply=} [properties] Properties to set
         * @returns {conversation.BotReply} BotReply instance
         */
        BotReply.create = function create(properties) {
            return new BotReply(properties);
        };

        /**
         * Encodes the specified BotReply message. Does not implicitly {@link conversation.BotReply.verify|verify} messages.
         * @function encode
         * @memberof conversation.BotReply
         * @static
         * @param {conversation.IBotReply} message BotReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.endTime);
            if (message.generatedSql != null && Object.hasOwnProperty.call(message, "generatedSql"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.generatedSql);
            if (message.generatedSqlExplanation != null && Object.hasOwnProperty.call(message, "generatedSqlExplanation"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.generatedSqlExplanation);
            if (message.sqlExecutionResult != null && Object.hasOwnProperty.call(message, "sqlExecutionResult"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sqlExecutionResult);
            if (message.megaTableWithStatement != null && Object.hasOwnProperty.call(message, "megaTableWithStatement"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.megaTableWithStatement);
            if (message.megaTableSchema != null && Object.hasOwnProperty.call(message, "megaTableSchema"))
                $root.conversation.MegaTableSchema.encode(message.megaTableSchema, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.generatedSqlQueryParts != null && Object.hasOwnProperty.call(message, "generatedSqlQueryParts"))
                $root.conversation.GeneratedSQLQueryParts.encode(message.generatedSqlQueryParts, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.sqlExecutionResultHumanForm != null && Object.hasOwnProperty.call(message, "sqlExecutionResultHumanForm"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.sqlExecutionResultHumanForm);
            if (message.conversationGeneratedSqlInformation != null && message.conversationGeneratedSqlInformation.length)
                for (let i = 0; i < message.conversationGeneratedSqlInformation.length; ++i)
                    $root.conversation.ConversationGeneratedSQLInformation.encode(message.conversationGeneratedSqlInformation[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.botReplyChips != null && message.botReplyChips.length)
                for (let i = 0; i < message.botReplyChips.length; ++i)
                    $root.conversation.BotReplyChip.encode(message.botReplyChips[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BotReply message, length delimited. Does not implicitly {@link conversation.BotReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.BotReply
         * @static
         * @param {conversation.IBotReply} message BotReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotReply message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.BotReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.BotReply} BotReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.BotReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.messageId = reader.string();
                        break;
                    }
                case 2: {
                        message.startTime = reader.int32();
                        break;
                    }
                case 3: {
                        message.endTime = reader.int32();
                        break;
                    }
                case 4: {
                        message.generatedSql = reader.string();
                        break;
                    }
                case 5: {
                        message.generatedSqlExplanation = reader.string();
                        break;
                    }
                case 6: {
                        message.sqlExecutionResult = reader.string();
                        break;
                    }
                case 7: {
                        message.megaTableWithStatement = reader.string();
                        break;
                    }
                case 8: {
                        message.megaTableSchema = $root.conversation.MegaTableSchema.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.generatedSqlQueryParts = $root.conversation.GeneratedSQLQueryParts.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.sqlExecutionResultHumanForm = reader.string();
                        break;
                    }
                case 11: {
                        if (!(message.conversationGeneratedSqlInformation && message.conversationGeneratedSqlInformation.length))
                            message.conversationGeneratedSqlInformation = [];
                        message.conversationGeneratedSqlInformation.push($root.conversation.ConversationGeneratedSQLInformation.decode(reader, reader.uint32()));
                        break;
                    }
                case 12: {
                        if (!(message.botReplyChips && message.botReplyChips.length))
                            message.botReplyChips = [];
                        message.botReplyChips.push($root.conversation.BotReplyChip.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BotReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.BotReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.BotReply} BotReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotReply message.
         * @function verify
         * @memberof conversation.BotReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime))
                    return "startTime: integer expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime))
                    return "endTime: integer expected";
            if (message.generatedSql != null && message.hasOwnProperty("generatedSql"))
                if (!$util.isString(message.generatedSql))
                    return "generatedSql: string expected";
            if (message.generatedSqlExplanation != null && message.hasOwnProperty("generatedSqlExplanation"))
                if (!$util.isString(message.generatedSqlExplanation))
                    return "generatedSqlExplanation: string expected";
            if (message.sqlExecutionResult != null && message.hasOwnProperty("sqlExecutionResult"))
                if (!$util.isString(message.sqlExecutionResult))
                    return "sqlExecutionResult: string expected";
            if (message.megaTableWithStatement != null && message.hasOwnProperty("megaTableWithStatement"))
                if (!$util.isString(message.megaTableWithStatement))
                    return "megaTableWithStatement: string expected";
            if (message.megaTableSchema != null && message.hasOwnProperty("megaTableSchema")) {
                let error = $root.conversation.MegaTableSchema.verify(message.megaTableSchema);
                if (error)
                    return "megaTableSchema." + error;
            }
            if (message.generatedSqlQueryParts != null && message.hasOwnProperty("generatedSqlQueryParts")) {
                let error = $root.conversation.GeneratedSQLQueryParts.verify(message.generatedSqlQueryParts);
                if (error)
                    return "generatedSqlQueryParts." + error;
            }
            if (message.sqlExecutionResultHumanForm != null && message.hasOwnProperty("sqlExecutionResultHumanForm"))
                if (!$util.isString(message.sqlExecutionResultHumanForm))
                    return "sqlExecutionResultHumanForm: string expected";
            if (message.conversationGeneratedSqlInformation != null && message.hasOwnProperty("conversationGeneratedSqlInformation")) {
                if (!Array.isArray(message.conversationGeneratedSqlInformation))
                    return "conversationGeneratedSqlInformation: array expected";
                for (let i = 0; i < message.conversationGeneratedSqlInformation.length; ++i) {
                    let error = $root.conversation.ConversationGeneratedSQLInformation.verify(message.conversationGeneratedSqlInformation[i]);
                    if (error)
                        return "conversationGeneratedSqlInformation." + error;
                }
            }
            if (message.botReplyChips != null && message.hasOwnProperty("botReplyChips")) {
                if (!Array.isArray(message.botReplyChips))
                    return "botReplyChips: array expected";
                for (let i = 0; i < message.botReplyChips.length; ++i) {
                    let error = $root.conversation.BotReplyChip.verify(message.botReplyChips[i]);
                    if (error)
                        return "botReplyChips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BotReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.BotReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.BotReply} BotReply
         */
        BotReply.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.BotReply)
                return object;
            let message = new $root.conversation.BotReply();
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            if (object.startTime != null)
                message.startTime = object.startTime | 0;
            if (object.endTime != null)
                message.endTime = object.endTime | 0;
            if (object.generatedSql != null)
                message.generatedSql = String(object.generatedSql);
            if (object.generatedSqlExplanation != null)
                message.generatedSqlExplanation = String(object.generatedSqlExplanation);
            if (object.sqlExecutionResult != null)
                message.sqlExecutionResult = String(object.sqlExecutionResult);
            if (object.megaTableWithStatement != null)
                message.megaTableWithStatement = String(object.megaTableWithStatement);
            if (object.megaTableSchema != null) {
                if (typeof object.megaTableSchema !== "object")
                    throw TypeError(".conversation.BotReply.megaTableSchema: object expected");
                message.megaTableSchema = $root.conversation.MegaTableSchema.fromObject(object.megaTableSchema);
            }
            if (object.generatedSqlQueryParts != null) {
                if (typeof object.generatedSqlQueryParts !== "object")
                    throw TypeError(".conversation.BotReply.generatedSqlQueryParts: object expected");
                message.generatedSqlQueryParts = $root.conversation.GeneratedSQLQueryParts.fromObject(object.generatedSqlQueryParts);
            }
            if (object.sqlExecutionResultHumanForm != null)
                message.sqlExecutionResultHumanForm = String(object.sqlExecutionResultHumanForm);
            if (object.conversationGeneratedSqlInformation) {
                if (!Array.isArray(object.conversationGeneratedSqlInformation))
                    throw TypeError(".conversation.BotReply.conversationGeneratedSqlInformation: array expected");
                message.conversationGeneratedSqlInformation = [];
                for (let i = 0; i < object.conversationGeneratedSqlInformation.length; ++i) {
                    if (typeof object.conversationGeneratedSqlInformation[i] !== "object")
                        throw TypeError(".conversation.BotReply.conversationGeneratedSqlInformation: object expected");
                    message.conversationGeneratedSqlInformation[i] = $root.conversation.ConversationGeneratedSQLInformation.fromObject(object.conversationGeneratedSqlInformation[i]);
                }
            }
            if (object.botReplyChips) {
                if (!Array.isArray(object.botReplyChips))
                    throw TypeError(".conversation.BotReply.botReplyChips: array expected");
                message.botReplyChips = [];
                for (let i = 0; i < object.botReplyChips.length; ++i) {
                    if (typeof object.botReplyChips[i] !== "object")
                        throw TypeError(".conversation.BotReply.botReplyChips: object expected");
                    message.botReplyChips[i] = $root.conversation.BotReplyChip.fromObject(object.botReplyChips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BotReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.BotReply
         * @static
         * @param {conversation.BotReply} message BotReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.conversationGeneratedSqlInformation = [];
                object.botReplyChips = [];
            }
            if (options.defaults) {
                object.messageId = "";
                object.startTime = 0;
                object.endTime = 0;
                object.generatedSql = "";
                object.generatedSqlExplanation = "";
                object.sqlExecutionResult = "";
                object.megaTableWithStatement = "";
                object.megaTableSchema = null;
                object.generatedSqlQueryParts = null;
                object.sqlExecutionResultHumanForm = "";
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                object.startTime = message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            if (message.generatedSql != null && message.hasOwnProperty("generatedSql"))
                object.generatedSql = message.generatedSql;
            if (message.generatedSqlExplanation != null && message.hasOwnProperty("generatedSqlExplanation"))
                object.generatedSqlExplanation = message.generatedSqlExplanation;
            if (message.sqlExecutionResult != null && message.hasOwnProperty("sqlExecutionResult"))
                object.sqlExecutionResult = message.sqlExecutionResult;
            if (message.megaTableWithStatement != null && message.hasOwnProperty("megaTableWithStatement"))
                object.megaTableWithStatement = message.megaTableWithStatement;
            if (message.megaTableSchema != null && message.hasOwnProperty("megaTableSchema"))
                object.megaTableSchema = $root.conversation.MegaTableSchema.toObject(message.megaTableSchema, options);
            if (message.generatedSqlQueryParts != null && message.hasOwnProperty("generatedSqlQueryParts"))
                object.generatedSqlQueryParts = $root.conversation.GeneratedSQLQueryParts.toObject(message.generatedSqlQueryParts, options);
            if (message.sqlExecutionResultHumanForm != null && message.hasOwnProperty("sqlExecutionResultHumanForm"))
                object.sqlExecutionResultHumanForm = message.sqlExecutionResultHumanForm;
            if (message.conversationGeneratedSqlInformation && message.conversationGeneratedSqlInformation.length) {
                object.conversationGeneratedSqlInformation = [];
                for (let j = 0; j < message.conversationGeneratedSqlInformation.length; ++j)
                    object.conversationGeneratedSqlInformation[j] = $root.conversation.ConversationGeneratedSQLInformation.toObject(message.conversationGeneratedSqlInformation[j], options);
            }
            if (message.botReplyChips && message.botReplyChips.length) {
                object.botReplyChips = [];
                for (let j = 0; j < message.botReplyChips.length; ++j)
                    object.botReplyChips[j] = $root.conversation.BotReplyChip.toObject(message.botReplyChips[j], options);
            }
            return object;
        };

        /**
         * Converts this BotReply to JSON.
         * @function toJSON
         * @memberof conversation.BotReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BotReply
         * @function getTypeUrl
         * @memberof conversation.BotReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BotReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.BotReply";
        };

        return BotReply;
    })();

    conversation.BotReplyChip = (function() {

        /**
         * Properties of a BotReplyChip.
         * @memberof conversation
         * @interface IBotReplyChip
         * @property {string|null} [id] BotReplyChip id
         * @property {conversation.BotReplyChipType|null} [type] BotReplyChip type
         * @property {string|null} [content] BotReplyChip content
         * @property {number|null} [timestamp] BotReplyChip timestamp
         */

        /**
         * Constructs a new BotReplyChip.
         * @memberof conversation
         * @classdesc Represents a BotReplyChip.
         * @implements IBotReplyChip
         * @constructor
         * @param {conversation.IBotReplyChip=} [properties] Properties to set
         */
        function BotReplyChip(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotReplyChip id.
         * @member {string} id
         * @memberof conversation.BotReplyChip
         * @instance
         */
        BotReplyChip.prototype.id = "";

        /**
         * BotReplyChip type.
         * @member {conversation.BotReplyChipType} type
         * @memberof conversation.BotReplyChip
         * @instance
         */
        BotReplyChip.prototype.type = 0;

        /**
         * BotReplyChip content.
         * @member {string} content
         * @memberof conversation.BotReplyChip
         * @instance
         */
        BotReplyChip.prototype.content = "";

        /**
         * BotReplyChip timestamp.
         * @member {number} timestamp
         * @memberof conversation.BotReplyChip
         * @instance
         */
        BotReplyChip.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BotReplyChip instance using the specified properties.
         * @function create
         * @memberof conversation.BotReplyChip
         * @static
         * @param {conversation.IBotReplyChip=} [properties] Properties to set
         * @returns {conversation.BotReplyChip} BotReplyChip instance
         */
        BotReplyChip.create = function create(properties) {
            return new BotReplyChip(properties);
        };

        /**
         * Encodes the specified BotReplyChip message. Does not implicitly {@link conversation.BotReplyChip.verify|verify} messages.
         * @function encode
         * @memberof conversation.BotReplyChip
         * @static
         * @param {conversation.IBotReplyChip} message BotReplyChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotReplyChip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified BotReplyChip message, length delimited. Does not implicitly {@link conversation.BotReplyChip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.BotReplyChip
         * @static
         * @param {conversation.IBotReplyChip} message BotReplyChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotReplyChip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotReplyChip message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.BotReplyChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.BotReplyChip} BotReplyChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotReplyChip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.BotReplyChip();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.content = reader.string();
                        break;
                    }
                case 4: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BotReplyChip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.BotReplyChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.BotReplyChip} BotReplyChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotReplyChip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotReplyChip message.
         * @function verify
         * @memberof conversation.BotReplyChip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotReplyChip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a BotReplyChip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.BotReplyChip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.BotReplyChip} BotReplyChip
         */
        BotReplyChip.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.BotReplyChip)
                return object;
            let message = new $root.conversation.BotReplyChip();
            if (object.id != null)
                message.id = String(object.id);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "BOT_REPLY_CHIP_TYPE_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "BOT_REPLY_CHIP_TYPE_TEXT":
            case 1:
                message.type = 1;
                break;
            case "BOT_REPLY_CHIP_TYPE_TABLE":
            case 2:
                message.type = 2;
                break;
            case "BOT_REPLY_CHIP_TYPE_SQL_GENERATION_PROGRESS":
            case 3:
                message.type = 3;
                break;
            case "BOT_REPLY_CHIP_TYPE_SQL_RESULT":
            case 4:
                message.type = 4;
                break;
            case "BOT_REPLY_CHIP_TYPE_SQL_EXPLANATION":
            case 5:
                message.type = 5;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BotReplyChip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.BotReplyChip
         * @static
         * @param {conversation.BotReplyChip} message BotReplyChip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotReplyChip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.type = options.enums === String ? "BOT_REPLY_CHIP_TYPE_UNKNOWN" : 0;
                object.content = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.conversation.BotReplyChipType[message.type] === undefined ? message.type : $root.conversation.BotReplyChipType[message.type] : message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this BotReplyChip to JSON.
         * @function toJSON
         * @memberof conversation.BotReplyChip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotReplyChip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BotReplyChip
         * @function getTypeUrl
         * @memberof conversation.BotReplyChip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BotReplyChip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.BotReplyChip";
        };

        return BotReplyChip;
    })();

    /**
     * BotState enum.
     * @name conversation.BotState
     * @enum {number}
     * @property {number} BotState_UNKNOWN=0 BotState_UNKNOWN value
     * @property {number} GenerateSQL=1 GenerateSQL value
     * @property {number} ExecuteSQL=2 ExecuteSQL value
     * @property {number} WaitingForInput=3 WaitingForInput value
     */
    conversation.BotState = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BotState_UNKNOWN"] = 0;
        values[valuesById[1] = "GenerateSQL"] = 1;
        values[valuesById[2] = "ExecuteSQL"] = 2;
        values[valuesById[3] = "WaitingForInput"] = 3;
        return values;
    })();

    /**
     * SQLResultState enum.
     * @name conversation.SQLResultState
     * @enum {number}
     * @property {number} SQLResultState_UNKNOWN=0 SQLResultState_UNKNOWN value
     * @property {number} NOT_PRESENT=1 NOT_PRESENT value
     * @property {number} IN_SYNC=2 IN_SYNC value
     * @property {number} OUTDATED=3 OUTDATED value
     */
    conversation.SQLResultState = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SQLResultState_UNKNOWN"] = 0;
        values[valuesById[1] = "NOT_PRESENT"] = 1;
        values[valuesById[2] = "IN_SYNC"] = 2;
        values[valuesById[3] = "OUTDATED"] = 3;
        return values;
    })();

    conversation.Ticket = (function() {

        /**
         * Properties of a Ticket.
         * @memberof conversation
         * @interface ITicket
         * @property {string|null} [ticketId] Ticket ticketId
         * @property {conversation.TicketStatus|null} [ticketStatus] Ticket ticketStatus
         */

        /**
         * Constructs a new Ticket.
         * @memberof conversation
         * @classdesc Represents a Ticket.
         * @implements ITicket
         * @constructor
         * @param {conversation.ITicket=} [properties] Properties to set
         */
        function Ticket(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ticket ticketId.
         * @member {string} ticketId
         * @memberof conversation.Ticket
         * @instance
         */
        Ticket.prototype.ticketId = "";

        /**
         * Ticket ticketStatus.
         * @member {conversation.TicketStatus} ticketStatus
         * @memberof conversation.Ticket
         * @instance
         */
        Ticket.prototype.ticketStatus = 0;

        /**
         * Creates a new Ticket instance using the specified properties.
         * @function create
         * @memberof conversation.Ticket
         * @static
         * @param {conversation.ITicket=} [properties] Properties to set
         * @returns {conversation.Ticket} Ticket instance
         */
        Ticket.create = function create(properties) {
            return new Ticket(properties);
        };

        /**
         * Encodes the specified Ticket message. Does not implicitly {@link conversation.Ticket.verify|verify} messages.
         * @function encode
         * @memberof conversation.Ticket
         * @static
         * @param {conversation.ITicket} message Ticket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ticket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticketId != null && Object.hasOwnProperty.call(message, "ticketId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticketId);
            if (message.ticketStatus != null && Object.hasOwnProperty.call(message, "ticketStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ticketStatus);
            return writer;
        };

        /**
         * Encodes the specified Ticket message, length delimited. Does not implicitly {@link conversation.Ticket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.Ticket
         * @static
         * @param {conversation.ITicket} message Ticket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ticket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ticket message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.Ticket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.Ticket} Ticket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ticket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.Ticket();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ticketId = reader.string();
                        break;
                    }
                case 2: {
                        message.ticketStatus = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ticket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.Ticket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.Ticket} Ticket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ticket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ticket message.
         * @function verify
         * @memberof conversation.Ticket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ticket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                if (!$util.isString(message.ticketId))
                    return "ticketId: string expected";
            if (message.ticketStatus != null && message.hasOwnProperty("ticketStatus"))
                switch (message.ticketStatus) {
                default:
                    return "ticketStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.Ticket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.Ticket} Ticket
         */
        Ticket.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.Ticket)
                return object;
            let message = new $root.conversation.Ticket();
            if (object.ticketId != null)
                message.ticketId = String(object.ticketId);
            switch (object.ticketStatus) {
            default:
                if (typeof object.ticketStatus === "number") {
                    message.ticketStatus = object.ticketStatus;
                    break;
                }
                break;
            case "TicketStatus_UNKNOWN":
            case 0:
                message.ticketStatus = 0;
                break;
            case "ASK_FOR_REVIEW":
            case 1:
                message.ticketStatus = 1;
                break;
            case "APPROVED":
            case 2:
                message.ticketStatus = 2;
                break;
            case "REJECTED":
            case 3:
                message.ticketStatus = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Ticket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.Ticket
         * @static
         * @param {conversation.Ticket} message Ticket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ticket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ticketId = "";
                object.ticketStatus = options.enums === String ? "TicketStatus_UNKNOWN" : 0;
            }
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                object.ticketId = message.ticketId;
            if (message.ticketStatus != null && message.hasOwnProperty("ticketStatus"))
                object.ticketStatus = options.enums === String ? $root.conversation.TicketStatus[message.ticketStatus] === undefined ? message.ticketStatus : $root.conversation.TicketStatus[message.ticketStatus] : message.ticketStatus;
            return object;
        };

        /**
         * Converts this Ticket to JSON.
         * @function toJSON
         * @memberof conversation.Ticket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ticket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ticket
         * @function getTypeUrl
         * @memberof conversation.Ticket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ticket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.Ticket";
        };

        return Ticket;
    })();

    /**
     * TicketStatus enum.
     * @name conversation.TicketStatus
     * @enum {number}
     * @property {number} TicketStatus_UNKNOWN=0 TicketStatus_UNKNOWN value
     * @property {number} ASK_FOR_REVIEW=1 ASK_FOR_REVIEW value
     * @property {number} APPROVED=2 APPROVED value
     * @property {number} REJECTED=3 REJECTED value
     */
    conversation.TicketStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TicketStatus_UNKNOWN"] = 0;
        values[valuesById[1] = "ASK_FOR_REVIEW"] = 1;
        values[valuesById[2] = "APPROVED"] = 2;
        values[valuesById[3] = "REJECTED"] = 3;
        return values;
    })();

    conversation.SQLProcessingCheckpoint = (function() {

        /**
         * Properties of a SQLProcessingCheckpoint.
         * @memberof conversation
         * @interface ISQLProcessingCheckpoint
         * @property {string|null} [checkpointId] SQLProcessingCheckpoint checkpointId
         * @property {string|null} [threadId] SQLProcessingCheckpoint threadId
         * @property {conversation.SQLProcessingState|null} [state] SQLProcessingCheckpoint state
         * @property {string|null} [workspace] SQLProcessingCheckpoint workspace
         * @property {number|null} [startTime] SQLProcessingCheckpoint startTime
         * @property {number|null} [endTime] SQLProcessingCheckpoint endTime
         */

        /**
         * Constructs a new SQLProcessingCheckpoint.
         * @memberof conversation
         * @classdesc Represents a SQLProcessingCheckpoint.
         * @implements ISQLProcessingCheckpoint
         * @constructor
         * @param {conversation.ISQLProcessingCheckpoint=} [properties] Properties to set
         */
        function SQLProcessingCheckpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SQLProcessingCheckpoint checkpointId.
         * @member {string} checkpointId
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         */
        SQLProcessingCheckpoint.prototype.checkpointId = "";

        /**
         * SQLProcessingCheckpoint threadId.
         * @member {string} threadId
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         */
        SQLProcessingCheckpoint.prototype.threadId = "";

        /**
         * SQLProcessingCheckpoint state.
         * @member {conversation.SQLProcessingState} state
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         */
        SQLProcessingCheckpoint.prototype.state = 0;

        /**
         * SQLProcessingCheckpoint workspace.
         * @member {string} workspace
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         */
        SQLProcessingCheckpoint.prototype.workspace = "";

        /**
         * SQLProcessingCheckpoint startTime.
         * @member {number} startTime
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         */
        SQLProcessingCheckpoint.prototype.startTime = 0;

        /**
         * SQLProcessingCheckpoint endTime.
         * @member {number} endTime
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         */
        SQLProcessingCheckpoint.prototype.endTime = 0;

        /**
         * Creates a new SQLProcessingCheckpoint instance using the specified properties.
         * @function create
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {conversation.ISQLProcessingCheckpoint=} [properties] Properties to set
         * @returns {conversation.SQLProcessingCheckpoint} SQLProcessingCheckpoint instance
         */
        SQLProcessingCheckpoint.create = function create(properties) {
            return new SQLProcessingCheckpoint(properties);
        };

        /**
         * Encodes the specified SQLProcessingCheckpoint message. Does not implicitly {@link conversation.SQLProcessingCheckpoint.verify|verify} messages.
         * @function encode
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {conversation.ISQLProcessingCheckpoint} message SQLProcessingCheckpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SQLProcessingCheckpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.checkpointId != null && Object.hasOwnProperty.call(message, "checkpointId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.checkpointId);
            if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.threadId);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.workspace != null && Object.hasOwnProperty.call(message, "workspace"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.workspace);
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.endTime);
            return writer;
        };

        /**
         * Encodes the specified SQLProcessingCheckpoint message, length delimited. Does not implicitly {@link conversation.SQLProcessingCheckpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {conversation.ISQLProcessingCheckpoint} message SQLProcessingCheckpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SQLProcessingCheckpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SQLProcessingCheckpoint message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.SQLProcessingCheckpoint} SQLProcessingCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SQLProcessingCheckpoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.SQLProcessingCheckpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.checkpointId = reader.string();
                        break;
                    }
                case 2: {
                        message.threadId = reader.string();
                        break;
                    }
                case 3: {
                        message.state = reader.int32();
                        break;
                    }
                case 4: {
                        message.workspace = reader.string();
                        break;
                    }
                case 5: {
                        message.startTime = reader.int32();
                        break;
                    }
                case 6: {
                        message.endTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SQLProcessingCheckpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.SQLProcessingCheckpoint} SQLProcessingCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SQLProcessingCheckpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SQLProcessingCheckpoint message.
         * @function verify
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SQLProcessingCheckpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.checkpointId != null && message.hasOwnProperty("checkpointId"))
                if (!$util.isString(message.checkpointId))
                    return "checkpointId: string expected";
            if (message.threadId != null && message.hasOwnProperty("threadId"))
                if (!$util.isString(message.threadId))
                    return "threadId: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                if (!$util.isString(message.workspace))
                    return "workspace: string expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime))
                    return "startTime: integer expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime))
                    return "endTime: integer expected";
            return null;
        };

        /**
         * Creates a SQLProcessingCheckpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.SQLProcessingCheckpoint} SQLProcessingCheckpoint
         */
        SQLProcessingCheckpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.SQLProcessingCheckpoint)
                return object;
            let message = new $root.conversation.SQLProcessingCheckpoint();
            if (object.checkpointId != null)
                message.checkpointId = String(object.checkpointId);
            if (object.threadId != null)
                message.threadId = String(object.threadId);
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "SQL_PROCESSING_STATE_UNKNOWN":
            case 0:
                message.state = 0;
                break;
            case "SQL_PROCESSING_STATE_PRE_PROCESSING":
            case 1:
                message.state = 1;
                break;
            case "SQL_PROCESSING_STATE_REPLIED":
            case 2:
                message.state = 2;
                break;
            case "SQL_PROCESSING_STATE_GENERATION_FAILED":
            case 3:
                message.state = 3;
                break;
            case "SQL_PROCESSING_STATE_TABLE_SELECTION":
            case 4:
                message.state = 4;
                break;
            case "SQL_PROCESSING_STATE_DRAFTING_SQL":
            case 5:
                message.state = 5;
                break;
            case "SQL_PROCESSING_STATE_VALIDATING_SQL":
            case 6:
                message.state = 6;
                break;
            }
            if (object.workspace != null)
                message.workspace = String(object.workspace);
            if (object.startTime != null)
                message.startTime = object.startTime | 0;
            if (object.endTime != null)
                message.endTime = object.endTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a SQLProcessingCheckpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {conversation.SQLProcessingCheckpoint} message SQLProcessingCheckpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SQLProcessingCheckpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.checkpointId = "";
                object.threadId = "";
                object.state = options.enums === String ? "SQL_PROCESSING_STATE_UNKNOWN" : 0;
                object.workspace = "";
                object.startTime = 0;
                object.endTime = 0;
            }
            if (message.checkpointId != null && message.hasOwnProperty("checkpointId"))
                object.checkpointId = message.checkpointId;
            if (message.threadId != null && message.hasOwnProperty("threadId"))
                object.threadId = message.threadId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.conversation.SQLProcessingState[message.state] === undefined ? message.state : $root.conversation.SQLProcessingState[message.state] : message.state;
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                object.workspace = message.workspace;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                object.startTime = message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            return object;
        };

        /**
         * Converts this SQLProcessingCheckpoint to JSON.
         * @function toJSON
         * @memberof conversation.SQLProcessingCheckpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SQLProcessingCheckpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SQLProcessingCheckpoint
         * @function getTypeUrl
         * @memberof conversation.SQLProcessingCheckpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SQLProcessingCheckpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.SQLProcessingCheckpoint";
        };

        return SQLProcessingCheckpoint;
    })();

    conversation.ConversationCheckpoint = (function() {

        /**
         * Properties of a ConversationCheckpoint.
         * @memberof conversation
         * @interface IConversationCheckpoint
         * @property {string|null} [eventTs] ConversationCheckpoint eventTs
         * @property {number|null} [tries] ConversationCheckpoint tries
         * @property {conversation.ConversationState|null} [state] ConversationCheckpoint state
         * @property {string|null} [workspace] ConversationCheckpoint workspace
         */

        /**
         * Constructs a new ConversationCheckpoint.
         * @memberof conversation
         * @classdesc Represents a ConversationCheckpoint.
         * @implements IConversationCheckpoint
         * @constructor
         * @param {conversation.IConversationCheckpoint=} [properties] Properties to set
         */
        function ConversationCheckpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConversationCheckpoint eventTs.
         * @member {string} eventTs
         * @memberof conversation.ConversationCheckpoint
         * @instance
         */
        ConversationCheckpoint.prototype.eventTs = "";

        /**
         * ConversationCheckpoint tries.
         * @member {number} tries
         * @memberof conversation.ConversationCheckpoint
         * @instance
         */
        ConversationCheckpoint.prototype.tries = 0;

        /**
         * ConversationCheckpoint state.
         * @member {conversation.ConversationState} state
         * @memberof conversation.ConversationCheckpoint
         * @instance
         */
        ConversationCheckpoint.prototype.state = 0;

        /**
         * ConversationCheckpoint workspace.
         * @member {string} workspace
         * @memberof conversation.ConversationCheckpoint
         * @instance
         */
        ConversationCheckpoint.prototype.workspace = "";

        /**
         * Creates a new ConversationCheckpoint instance using the specified properties.
         * @function create
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {conversation.IConversationCheckpoint=} [properties] Properties to set
         * @returns {conversation.ConversationCheckpoint} ConversationCheckpoint instance
         */
        ConversationCheckpoint.create = function create(properties) {
            return new ConversationCheckpoint(properties);
        };

        /**
         * Encodes the specified ConversationCheckpoint message. Does not implicitly {@link conversation.ConversationCheckpoint.verify|verify} messages.
         * @function encode
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {conversation.IConversationCheckpoint} message ConversationCheckpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationCheckpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventTs != null && Object.hasOwnProperty.call(message, "eventTs"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventTs);
            if (message.tries != null && Object.hasOwnProperty.call(message, "tries"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tries);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.workspace != null && Object.hasOwnProperty.call(message, "workspace"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.workspace);
            return writer;
        };

        /**
         * Encodes the specified ConversationCheckpoint message, length delimited. Does not implicitly {@link conversation.ConversationCheckpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {conversation.IConversationCheckpoint} message ConversationCheckpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationCheckpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConversationCheckpoint message from the specified reader or buffer.
         * @function decode
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {conversation.ConversationCheckpoint} ConversationCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationCheckpoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.conversation.ConversationCheckpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.eventTs = reader.string();
                        break;
                    }
                case 2: {
                        message.tries = reader.int32();
                        break;
                    }
                case 3: {
                        message.state = reader.int32();
                        break;
                    }
                case 4: {
                        message.workspace = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConversationCheckpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {conversation.ConversationCheckpoint} ConversationCheckpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationCheckpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConversationCheckpoint message.
         * @function verify
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConversationCheckpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventTs != null && message.hasOwnProperty("eventTs"))
                if (!$util.isString(message.eventTs))
                    return "eventTs: string expected";
            if (message.tries != null && message.hasOwnProperty("tries"))
                if (!$util.isInteger(message.tries))
                    return "tries: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 4:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                if (!$util.isString(message.workspace))
                    return "workspace: string expected";
            return null;
        };

        /**
         * Creates a ConversationCheckpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {conversation.ConversationCheckpoint} ConversationCheckpoint
         */
        ConversationCheckpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.conversation.ConversationCheckpoint)
                return object;
            let message = new $root.conversation.ConversationCheckpoint();
            if (object.eventTs != null)
                message.eventTs = String(object.eventTs);
            if (object.tries != null)
                message.tries = object.tries | 0;
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "ConversationState_UNKNOWN":
            case 0:
                message.state = 0;
                break;
            case "PRE_PROCESSING":
            case 4:
                message.state = 4;
                break;
            case "PROCESSING":
            case 1:
                message.state = 1;
                break;
            case "REPLIED":
            case 2:
                message.state = 2;
                break;
            case "GENERATION_FAILED":
            case 3:
                message.state = 3;
                break;
            }
            if (object.workspace != null)
                message.workspace = String(object.workspace);
            return message;
        };

        /**
         * Creates a plain object from a ConversationCheckpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {conversation.ConversationCheckpoint} message ConversationCheckpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConversationCheckpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.eventTs = "";
                object.tries = 0;
                object.state = options.enums === String ? "ConversationState_UNKNOWN" : 0;
                object.workspace = "";
            }
            if (message.eventTs != null && message.hasOwnProperty("eventTs"))
                object.eventTs = message.eventTs;
            if (message.tries != null && message.hasOwnProperty("tries"))
                object.tries = message.tries;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.conversation.ConversationState[message.state] === undefined ? message.state : $root.conversation.ConversationState[message.state] : message.state;
            if (message.workspace != null && message.hasOwnProperty("workspace"))
                object.workspace = message.workspace;
            return object;
        };

        /**
         * Converts this ConversationCheckpoint to JSON.
         * @function toJSON
         * @memberof conversation.ConversationCheckpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConversationCheckpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConversationCheckpoint
         * @function getTypeUrl
         * @memberof conversation.ConversationCheckpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConversationCheckpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/conversation.ConversationCheckpoint";
        };

        return ConversationCheckpoint;
    })();

    /**
     * ConversationState enum.
     * @name conversation.ConversationState
     * @enum {number}
     * @property {number} ConversationState_UNKNOWN=0 ConversationState_UNKNOWN value
     * @property {number} PRE_PROCESSING=4 PRE_PROCESSING value
     * @property {number} PROCESSING=1 PROCESSING value
     * @property {number} REPLIED=2 REPLIED value
     * @property {number} GENERATION_FAILED=3 GENERATION_FAILED value
     */
    conversation.ConversationState = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ConversationState_UNKNOWN"] = 0;
        values[valuesById[4] = "PRE_PROCESSING"] = 4;
        values[valuesById[1] = "PROCESSING"] = 1;
        values[valuesById[2] = "REPLIED"] = 2;
        values[valuesById[3] = "GENERATION_FAILED"] = 3;
        return values;
    })();

    /**
     * SQLProcessingState enum.
     * @name conversation.SQLProcessingState
     * @enum {number}
     * @property {number} SQL_PROCESSING_STATE_UNKNOWN=0 SQL_PROCESSING_STATE_UNKNOWN value
     * @property {number} SQL_PROCESSING_STATE_PRE_PROCESSING=1 SQL_PROCESSING_STATE_PRE_PROCESSING value
     * @property {number} SQL_PROCESSING_STATE_REPLIED=2 SQL_PROCESSING_STATE_REPLIED value
     * @property {number} SQL_PROCESSING_STATE_GENERATION_FAILED=3 SQL_PROCESSING_STATE_GENERATION_FAILED value
     * @property {number} SQL_PROCESSING_STATE_TABLE_SELECTION=4 SQL_PROCESSING_STATE_TABLE_SELECTION value
     * @property {number} SQL_PROCESSING_STATE_DRAFTING_SQL=5 SQL_PROCESSING_STATE_DRAFTING_SQL value
     * @property {number} SQL_PROCESSING_STATE_VALIDATING_SQL=6 SQL_PROCESSING_STATE_VALIDATING_SQL value
     */
    conversation.SQLProcessingState = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SQL_PROCESSING_STATE_UNKNOWN"] = 0;
        values[valuesById[1] = "SQL_PROCESSING_STATE_PRE_PROCESSING"] = 1;
        values[valuesById[2] = "SQL_PROCESSING_STATE_REPLIED"] = 2;
        values[valuesById[3] = "SQL_PROCESSING_STATE_GENERATION_FAILED"] = 3;
        values[valuesById[4] = "SQL_PROCESSING_STATE_TABLE_SELECTION"] = 4;
        values[valuesById[5] = "SQL_PROCESSING_STATE_DRAFTING_SQL"] = 5;
        values[valuesById[6] = "SQL_PROCESSING_STATE_VALIDATING_SQL"] = 6;
        return values;
    })();

    /**
     * BotReplyChipType enum.
     * @name conversation.BotReplyChipType
     * @enum {number}
     * @property {number} BOT_REPLY_CHIP_TYPE_UNKNOWN=0 BOT_REPLY_CHIP_TYPE_UNKNOWN value
     * @property {number} BOT_REPLY_CHIP_TYPE_TEXT=1 BOT_REPLY_CHIP_TYPE_TEXT value
     * @property {number} BOT_REPLY_CHIP_TYPE_TABLE=2 BOT_REPLY_CHIP_TYPE_TABLE value
     * @property {number} BOT_REPLY_CHIP_TYPE_SQL_GENERATION_PROGRESS=3 BOT_REPLY_CHIP_TYPE_SQL_GENERATION_PROGRESS value
     * @property {number} BOT_REPLY_CHIP_TYPE_SQL_RESULT=4 BOT_REPLY_CHIP_TYPE_SQL_RESULT value
     * @property {number} BOT_REPLY_CHIP_TYPE_SQL_EXPLANATION=5 BOT_REPLY_CHIP_TYPE_SQL_EXPLANATION value
     */
    conversation.BotReplyChipType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BOT_REPLY_CHIP_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "BOT_REPLY_CHIP_TYPE_TEXT"] = 1;
        values[valuesById[2] = "BOT_REPLY_CHIP_TYPE_TABLE"] = 2;
        values[valuesById[3] = "BOT_REPLY_CHIP_TYPE_SQL_GENERATION_PROGRESS"] = 3;
        values[valuesById[4] = "BOT_REPLY_CHIP_TYPE_SQL_RESULT"] = 4;
        values[valuesById[5] = "BOT_REPLY_CHIP_TYPE_SQL_EXPLANATION"] = 5;
        return values;
    })();

    /**
     * ConversationApp enum.
     * @name conversation.ConversationApp
     * @enum {number}
     * @property {number} CONVERSATION_APP_UNKNOWN=0 CONVERSATION_APP_UNKNOWN value
     * @property {number} CONVERSATION_APP_SLACK=1 CONVERSATION_APP_SLACK value
     * @property {number} CONVERSATION_APP_DASHBOARD=2 CONVERSATION_APP_DASHBOARD value
     */
    conversation.ConversationApp = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONVERSATION_APP_UNKNOWN"] = 0;
        values[valuesById[1] = "CONVERSATION_APP_SLACK"] = 1;
        values[valuesById[2] = "CONVERSATION_APP_DASHBOARD"] = 2;
        return values;
    })();

    return conversation;
})();

export { $root as default };
