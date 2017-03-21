import { Parser, Expression, AccessScope, Unparser } from 'aurelia-binding';
import { BindingLanguage } from 'aurelia-templating';
import { RuleProperty } from './rule';
export declare type PropertyAccessor<TObject, TValue> = (object: TObject) => TValue;
export declare class ValidationParser {
    private parser;
    private bindinqLanguage;
    static inject: (typeof Parser | typeof BindingLanguage)[];
    private emptyStringExpression;
    private nullExpression;
    private undefinedExpression;
    private cache;
    constructor(parser: Parser, bindinqLanguage: BindingLanguage);
    parseMessage(message: string): Expression;
    parseProperty<TObject, TValue>(property: string | PropertyAccessor<TObject, TValue>): RuleProperty;
    private coalesce(part);
    private getAccessorExpression(fn);
}
export declare class MessageExpressionValidator extends Unparser {
    private originalMessage;
    static validate(expression: Expression, originalMessage: string): void;
    constructor(originalMessage: string);
    visitAccessScope(access: AccessScope): void;
}
