/* @flow */

import * as React from 'react';
import moment from 'moment';
import type { HOC } from 'recompose';

declare module 'antd' {
    declare type CheckableTagProps = {
        prefixCls?: string,
        className?: string,
        checked: boolean,
        onChange?: (checked: boolean) => void,
    };

    declare type GroupProps = {
        className?: string,
        size?: 'large' | 'small' | 'default',
        children?: any,
        style?: Object,
        prefixCls?: string,
        compact?: boolean,
    };

    declare class CheckableTag extends React.Component<CheckableTagProps> {}

    declare class Group extends React.Component<GroupProps> {}

    /* ----------------- Avatar TYPES --------------------- */

    declare export type AvatarProps = {
        /** Shape of avatar, options:`circle`, `square` */
        shape?: 'circle' | 'square',
        /** Size of avatar, options:`large`, `small`, `default` */
        size?: 'large' | 'small' | 'default',
        /** Src of image avatar */
        src?: string,
        /** Type of the Icon to be used in avatar */
        icon?: string,
        style?: Object,
        prefixCls?: string,
        className?: string,
        children?: any,
    };

    declare export class Avatar extends React.Component<AvatarProps> {}

    /* ----------------- Icon TYPES --------------------- */

    declare export type IconProps = {
        type: string,
        className?: string,
        title?: string,
        onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
        spin?: boolean,
        style?: Object,
    };

    declare export class Icon extends React.Component<IconProps> {}

    /* ----------------- Menu TYPES --------------------- */
    declare export class Layout extends React.Component<{}> {}

    declare export type SelectParam = {
        key: string,
        keyPath: Array<string>,
        item: any,
        domEvent: any,
        selectedKeys: Array<string>,
    };

    declare export type ClickParam = {
        key: string,
        keyPath: Array<string>,
        item: any,
        domEvent: any,
    };

    declare export type MenuProps = {
        id?: string,
        theme?: 'light' | 'dark',
        mode?: 'vertical' | 'horizontal' | 'inline',
        selectable?: boolean,
        selectedKeys?: Array<string>,
        defaultSelectedKeys?: Array<string>,
        openKeys?: Array<string>,
        defaultOpenKeys?: Array<string>,
        onOpenChange?: (openKeys: string[]) => void,
        onSelect?: (param: SelectParam) => void,
        onDeselect?: (param: SelectParam) => void,
        onClick?: (param: ClickParam) => void,
        style?: Object,
        openAnimation?: string | Object,
        openTransitionName?: string | Object,
        className?: string,
        prefixCls?: string,
        multiple?: boolean,
        inlineIndent?: number,
        inlineCollapsed?: boolean,
    };

    declare export class Menu extends React.Component<MenuProps> {
        static Divider: React.ComponentType<any>;
        static Item: React.ComponentType<any>;
        static SubMenu: React.ComponentType<any>;
        static ItemGroup: React.ComponentType<any>;
    }

    /* ----------------- Badge TYPES --------------------- */

    declare export type BadgeProps = {
        /** Number to show in badge */
        count?: number | string,
        showZero?: boolean,
        /** Max count to show */
        overflowCount?: number,
        /** whether to show red dot without number */
        dot?: boolean,
        style?: Object,
        prefixCls?: string,
        className?: string,
        status?: 'success' | 'processing' | 'default' | 'error' | 'warning',
        text?: string,
    };
    declare export class Badge extends React.Component<BadgeProps> {}

    /* ----------------- TAG TYPES --------------------- */

    declare export type TagProps = {
        prefixCls?: string,
        className?: string,
        color?: string,
        /** 标签是否可以关闭 */
        closable?: boolean,
        /** 关闭时的回调 */
        onClose?: Function,
        /** 动画关闭后的回调 */
        afterClose?: Function,
        style?: Object,
    };

    declare export class Tag extends React.Component<TagProps> {
        static CheckableTag: typeof CheckableTag;
    }

    /* ----------------- BUTTON TYPES --------------------- */

    declare export type ButtonSize = 'small' | 'large';

    declare export type ButtonGroupProps = {
        size?: ButtonSize,
        style?: Object,
        className?: string,
        prefixCls?: string,
    };

    declare export class ButtonGroup extends React.Component<ButtonGroupProps> {}

    declare export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger';
    declare export type ButtonShape = 'circle' | 'circle-outline';

    declare export type ButtonProps = {
        type?: ButtonType,
        htmlType?: string,
        icon?: string,
        shape?: ButtonShape,
        size?: ButtonSize,
        onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
        onMouseUp?: (e: SyntheticEvent<HTMLButtonElement>) => void,
        onMouseDown?: (e: SyntheticEvent<HTMLButtonElement>) => void,
        loading?:
            | boolean
            | {
                  delay?: number,
              },
        disabled?: boolean,
        style?: Object,
        prefixCls?: string,
        className?: string,
        ghost?: boolean,
    };

    declare export class Button extends React.Component<ButtonProps> {
        static Group: typeof ButtonGroup;
        static __ANT_BUTTON: boolean;
    }

    /* ----------------- Col TYPES --------------------- */

    declare export type ColSize = {
        span?: number,
        order?: number,
        offset?: number,
        push?: number,
        pull?: number,
    };
    declare export type ColProps = {
        className?: string,
        span?: number,
        order?: number,
        offset?: number,
        push?: number,
        pull?: number,
        xs?: number | ColSize,
        sm?: number | ColSize,
        md?: number | ColSize,
        lg?: number | ColSize,
        xl?: number | ColSize,
        prefixCls?: string,
        style?: Object,
    };
    declare export class Col extends React.Component<ColProps> {}

    /* ----------------- ROW TYPES --------------------- */

    declare export type RowProps = {
        className?: string,
        gutter?: number,
        type?: 'flex',
        align?: 'top' | 'middle' | 'bottom',
        justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between',
        style?: Object,
        prefixCls?: string,
    };

    declare export class Row extends React.Component<RowProps> {}

    /* ----------------- CARD TYPES --------------------- */

    declare export type CardProps = {
        prefixCls?: string,
        title?: React.Node,
        extra?: React.Node,
        bordered?: boolean,
        bodyStyle?: Object,
        style?: Object,
        loading?: boolean,
        noHovering?: boolean,
        children?: Object,
        id?: string,
        className?: string,
    };

    declare export class Card extends React.Component<CardProps> {
        // TODO: Add static grid
    }

    /* ----------------- INPUT TYPES --------------------- */

    declare export type AbstractInputProps = {
        prefixCls?: string,
        className?: string,
        defaultValue?: any,
        value?: any,
        style?: Object,
    };

    declare export type InputProps = {
        ...$Exact<AbstractInputProps>,
        placeholder?: string,
        type?: string,
        id?: number | string,
        name?: string,
        size?: 'large' | 'default' | 'small',
        maxLength?: string,
        disabled?: boolean,
        readOnly?: boolean,
        addonBefore?: React.Node,
        addonAfter?: React.Node,
        onPressEnter?: (e: *) => void,
        onKeyDown?: (e: SyntheticKeyboardEvent<*>) => void,
        onChange?: (e: SyntheticInputEvent<HTMLInputElement>) => void,
        onClick?: (e: SyntheticInputEvent<HTMLInputElement>) => void,
        onFocus?: (e: SyntheticInputEvent<HTMLInputElement>) => void,
        onBlur?: (e: SyntheticInputEvent<HTMLInputElement>) => void,
        autoComplete?: string,
        prefix?: React.Node,
        suffix?: React.Node,
        spellCheck?: boolean,
        autoFocus?: boolean,
    };

    declare export type SearchProps = {
        ...$Exact<InputProps>,
        onSearch?: (value: string) => any,
    };

    declare export class Search extends React.Component<SearchProps> {}

    declare export interface AutoSizeType {
        minRows?: number;
        maxRows?: number;
    }

    declare export type TextAreaProps = {
        ...$Exact<AbstractInputProps>,
        autosize?: boolean | AutoSizeType,
        onPressEnter?: (e: SyntheticEvent<HTMLInputElement>) => void,
    };

    declare export type HTMLTextareaProps = HTMLTextAreaElement;

    declare export class TextArea extends React.Component<TextAreaProps & HTMLTextareaProps> {}

    declare export class Input extends React.Component<InputProps> {
        static Group: typeof Group;
        static Search: typeof Search;
        static TextArea: typeof TextArea;
    }

    /* ----------------- TOOLTIP TYPES --------------------- */

    declare export interface AdjustOverflow {
        adjustX?: 0 | 1;
        adjustY?: 0 | 1;
    }

    declare export interface PlacementsConfig {
        arrowWidth?: number;
        horizontalArrowShift?: number;
        verticalArrowShift?: number;
        arrowPointAtCenter?: boolean;
        autoAdjustOverflow?: any;
    }

    declare export type getOverflowOptions = (autoAdjustOverflow: any) => any;

    declare export type getPlacements = (
        config?: PlacementsConfig,
    ) => {
        left: {
            points: string[],
            offset: number[],
        },
        right: {
            points: string[],
            offset: number[],
        },
        top: {
            points: string[],
            offset: number[],
        },
        bottom: {
            points: string[],
            offset: number[],
        },
        topLeft: {
            points: string[],
            offset: number[],
        },
        leftTop: {
            points: string[],
            offset: number[],
        },
        topRight: {
            points: string[],
            offset: number[],
        },
        rightTop: {
            points: string[],
            offset: number[],
        },
        bottomRight: {
            points: string[],
            offset: number[],
        },
        rightBottom: {
            points: string[],
            offset: number[],
        },
        bottomLeft: {
            points: string[],
            offset: number[],
        },
        leftBottom: {
            points: string[],
            offset: number[],
        },
    };

    declare export type TooltipPlacement =
        | 'top'
        | 'left'
        | 'right'
        | 'bottom'
        | 'topLeft'
        | 'topRight'
        | 'bottomLeft'
        | 'bottomRight'
        | 'leftTop'
        | 'leftBottom'
        | 'rightTop'
        | 'rightBottom';
    declare export interface AbstractTooltipProps {
        prefixCls?: string;
        overlayClassName?: string;
        style?: Object;
        overlayStyle?: Object;
        placement?: TooltipPlacement;
        builtinPlacements?: Object;
        visible?: boolean;
        onVisibleChange?: (visible: boolean) => void;
        mouseEnterDelay?: number;
        mouseLeaveDelay?: number;
        transitionName?: string;
        trigger?: 'hover' | 'focus' | 'click';
        openClassName?: string;
        arrowPointAtCenter?: boolean;
        autoAdjustOverflow?: boolean | AdjustOverflow;
        getTooltipContainer?: (triggerNode: Element) => HTMLElement;
        getPopupContainer?: (triggerNode: Element) => HTMLElement;
        children?: React.Node;
    }

    declare export interface TooltipProps extends AbstractTooltipProps {
        title?: React.Node;
        overlay?: React.Node;
    }

    declare export class Tooltip extends React.Component<TooltipProps> {}

    /* ----------------- FORM TYPES --------------------- */
    declare export type WrappedFormUtils<T> = {
        /** 获取一组输入控件的值，如不传入参数，则获取全部组件的值 */
        getFieldsValue(fieldNames?: Array<string>): Object,
        /** 获取一个输入控件的值 */
        getFieldValue(fieldName: string): any,
        /** 设置一组输入控件的值 */
        setFieldsValue(obj: Object): void,
        /** 设置一组输入控件的值 */
        setFields(obj: Object): void,
        /** 校验并获取一组输入域的值与 Error */
        validateFields(
            fieldNames: Array<string>,
            options: Object,
            callback: ValidateCallback<T>,
        ): any,
        validateFields(fieldNames: Array<string>, callback: ValidateCallback<T>): mixed,
        validateFields(options: Object, callback: ValidateCallback<T>): mixed,
        validateFields(callback: ValidateCallback<T>): mixed,
        /** 与 `validateFields` 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围 */
        validateFieldsAndScroll(
            fieldNames?: Array<string>,
            options?: Object,
            callback?: ValidateCallback<T>,
        ): void,
        validateFieldsAndScroll(fieldNames?: Array<string>, callback?: ValidateCallback<T>): void,
        validateFieldsAndScroll(options?: Object, callback?: ValidateCallback<T>): void,
        validateFieldsAndScroll(callback?: ValidateCallback<T>): void,
        /** 获取某个输入控件的 Error */
        getFieldError(name: string): Object[],
        getFieldsError(names?: Array<string>): Object,
        /** 判断一个输入控件是否在校验状态 */
        isFieldValidating(name: string): boolean,
        isFieldTouched(name: string): boolean,
        isFieldsTouched(names?: Array<string>): boolean,
        /** 重置一组输入控件的值与状态，如不传入参数，则重置所有组件 */
        resetFields(names?: Array<string>): void,
        getFieldDecorator(
            id: string,
            options?: GetFieldDecoratorOptions,
        ): (node: React.Node) => React.Node,
    };

    declare export interface FormItemProps {
        prefixCls?: string;
        id?: string;
        label?: React.Node;
        labelCol?: ColProps;
        wrapperCol?: ColProps;
        help?: React.Node;
        extra?: React.Node;
        validateStatus?: 'success' | 'warning' | 'error' | 'validating';
        hasFeedback?: boolean;
        className?: string;
        required?: boolean;
        style?: Object;
        colon?: boolean;
    }
    declare export interface FormItemContext {
        form: WrappedFormUtils<*>;
        vertical: boolean;
    }

    declare export class FormItem extends React.Component<FormItemProps> {}

    declare export interface FormCreateOption<T> {
        onFieldsChange?: (props: T, fields: Array<any>) => void;
        onValuesChange?: (props: T, values: any) => void;
        mapPropsToFields?: (props: T) => void;
        withRef?: boolean;
    }

    declare export interface FormProps<T> {
        layout?: 'horizontal' | 'inline' | 'vertical';
        horizontal?: boolean;
        inline?: boolean;
        vertical?: boolean;
        form?: WrappedFormUtils<T>;
        onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void;
        style?: Object;
        className?: string;
        prefixCls?: string;
        hideRequiredMark?: boolean;
    }
    declare export type ValidationRule = {
        /** validation error message */
        message?: string,
        /** built-in validation type, available options: https://github.com/yiminghe/async-validator#type */
        type?: string,
        /** indicates whether field is required */
        required?: boolean,
        /** treat required fields that only contain whitespace as errors */
        whitespace?: boolean,
        /** validate the exact length of a field */
        len?: number,
        /** validate the min length of a field */
        min?: number,
        /** validate the max length of a field */
        max?: number,
        /** validate the value from a list of possible values */
        enum?: string | string[],
        /** validate from a regular expression */
        pattern?: RegExp,
        /** transform a value before validation */
        transform?: (value: any) => any,
        /** custom validate function (Note: callback must be called) */
        validator?: (rule: any, value: any, callback: any, source?: any, options?: any) => any,
    };
    declare export type ValidateCallback<T> = (errors: any, values: T) => void | Promise<void>;
    declare export type GetFieldDecoratorOptions = {
        /** 子节点的值的属性，如 Checkbox 的是 'checked' */
        valuePropName?: string,
        /** 子节点的初始值，类型、可选值均由子节点决定 */
        initialValue?: any,
        /** 收集子节点的值的时机 */
        trigger?: string,
        /** 可以把 onChange 的参数转化为控件的值，例如 DatePicker 可设为：(date, dateString) => dateString */
        getValueFromEvent?: (...args: any[]) => any,
        /** 校验子节点值的时机 */
        validateTrigger?: string | string[],
        /** 校验规则，参见 [async-validator](https://github.com/yiminghe/async-validator) */
        rules?: ValidationRule[],
        /** 是否和其他控件互斥，特别用于 Radio 单选控件 */
        exclusive?: boolean,
        /** Normalize value to form component */
        normalize?: (value: any, prevValue: any, allValues: any) => any,
        /** Whether stop validate on first rule of error for this field.	 */
        validateFirst?: boolean,
    };

    declare export type FormComponentProps<T> = {
        form: WrappedFormUtils<T>,
    };

    declare export interface IFormComponentProps<T> {
        form: WrappedFormUtils<T>;
    }

    /* TODO: Doesn't work, use the static field outside of compose instead */
    declare export type CreateFormHOC<
        T,
        Base: FormComponentProps<T>,
        Enhanced: { ...$Exact<$Diff<Base, FormComponentProps<T>>> },
    > = (React.ComponentType<Base>) => React.ComponentType<Enhanced>;

    declare export class Form<T> extends React.Component<FormProps<T>> {
        static Item: typeof FormItem;
        static create: (
            options?: FormCreateOption<any>,
        ) => <Props: {}>(
            Component: React$ComponentType<FormComponentProps<T> & Props>,
        ) => React$ComponentType<Props>;
    }

    /* ----------------- TYPES --------------------- */

    declare export interface ModalProps {
        visible?: boolean; // default false
        confirmLoading?: boolean; // default false
        title?: React.Node | string;
        closeable?: boolean; // default true
        onOk: (e: MouseEvent<any>) => void;
        onCancel: (e: MouseEvent<any>) => void;
        afterClose?: () => void; // after modal closes completely
        width?: string | number; // default 520
        footer?: string | React.Node; // defaults to Ok and Cancel buttons
        okText?: string; // default OK
        okType?: ButtonType; // default primary
        cancelText?: string; // default Cancel
        markClosable?: boolean; // default true
        style?: Object; // typically used to position modal
        wrapClassname?: string; // class name of the container
        maskTransitionName?: string;
        transitionName?: string;
        className?: string;
        getContainer?: (instance: React.ElementType) => HTMLElement; //
        zIndex?: number;
    }

    declare export interface ModalContext {
        antLocale?: {
            Modal?: any,
        };
    }

    declare export interface ModalFuncProps {
        visible?: boolean;
        title?: React.Node | string;
        content?: React.Node | string;
        onOk?: (func: Function) => any;
        onCancel?: (func: Function) => any;
        width?: string | number;
        iconClassName?: string;
        okText?: string;
        okType?: ButtonType;
        cancelText?: string;
        iconType?: string;
        maskClosable?: boolean;
        zIndex?: number;
    }

    declare export type ModalFunc = (
        props: ModalFuncProps,
    ) => {
        destroy: () => void,
    };

    declare export class Modal extends React.Component<ModalProps> {
        static info: ModalFunc;
        static success: ModalFunc;
        static error: ModalFunc;
        static warn: ModalFunc;
        static warning: ModalFunc;
        static confirm: ModalFunc;
    }

    /* ---------------- Upload TYPES ------------------- */

    declare export type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
    declare export interface HttpRequestHeader {
        [key: string]: string;
    }
    declare export interface UploadFile {
        uid: number;
        size: number;
        name: string;
        lastModifiedDate?: Date;
        url?: string;
        status?: UploadFileStatus;
        percent?: number;
        thumbUrl?: string;
        originFileObj?: File;
        response?: any;
        error?: any;
    }
    declare export interface UploadChangeParam {
        file: UploadFile;
        fileList: Array<UploadFile>;
        event?: {
            percent: number,
        };
    }
    declare export interface ShowUploadListInterface {
        showRemoveIcon?: boolean;
        showPreviewIcon?: boolean;
    }
    declare export interface UploadLocale {
        uploading?: string;
        removeFile?: string;
        uploadError?: string;
        previewFile?: string;
    }

    declare export type CustomRequestArg = {
        action: ?string,
        data: Object,
        file: File,
        filename: string,
        headers: Object,
        onError: (err: Error, ret: any) => void,
        onProgress: (e: any) => void,
        onSuccess: (err: ?Error, xhr: any) => void,
        withCredentials: false,
    };

    declare export interface UploadProps {
        type?: 'drag' | 'select';
        name?: string;
        defaultFileList?: Array<UploadFile>;
        fileList?: Array<UploadFile>;
        action?: string;
        data?: Object | ((file: UploadFile) => any);
        headers?: HttpRequestHeader;
        showUploadList?: boolean | ShowUploadListInterface;
        multiple?: boolean;
        accept?: string;
        beforeUpload?: (file: UploadFile, FileList: UploadFile[]) => boolean | Promise<any>;
        onChange?: (info: UploadChangeParam) => void;
        listType?: 'text' | 'picture' | 'picture-card';
        className?: string;
        onPreview?: (file: UploadFile) => void;
        onRemove?: (file: UploadFile) => void | boolean;
        supportServerRender?: boolean;
        style?: Object;
        disabled?: boolean;
        prefixCls?: string;
        customRequest?: (option: CustomRequestArg) => void;
        withCredentials?: boolean;
        locale?: UploadLocale;
    }
    declare export interface UploadListProps {
        listType?: 'text' | 'picture' | 'picture-card';
        onPreview?: (file: UploadFile) => void;
        onRemove?: (file: UploadFile) => void | boolean;
        items?: Array<UploadFile>;
        progressAttr?: Object;
        prefixCls?: string;
        showRemoveIcon?: boolean;
        showPreviewIcon?: boolean;
        locale: UploadLocale;
    }

    declare export interface UploadContext {
        antLocale?: {
            Upload?: any,
        };
    }

    declare export type DraggerProps = UploadProps & {
        height?: number,
    };

    declare export class Dragger extends React.Component<DraggerProps> {}
    declare export class Upload extends React.Component<UploadProps> {
        static Dragger: typeof Dragger;
    }

    /* ----------------- Carousel TYPES --------------------- */

    declare export type CarouselEffect = 'scrollx' | 'fade';

    declare export interface CarouselProps {
        effect?: CarouselEffect;
        dots?: boolean;
        vertical?: boolean;
        autoplay?: boolean;
        easing?: string;
        beforeChange?: (from: number, to: number) => void;
        afterChange?: (current: number) => void;
        style?: Object;
        prefixCls?: string;
        accessibility?: boolean;
        nextArrow?: HTMLElement | any;
        prevArrow?: HTMLElement | any;
        pauseOnHover?: boolean;
        className?: string;
        adaptiveHeight?: boolean;
        arrows?: boolean;
        autoplaySpeed?: number;
        centerMode?: boolean;
        centerPadding?: string | any;
        cssEase?: string | any;
        dotsClass?: string;
        draggable?: boolean;
        fade?: boolean;
        focusOnSelect?: boolean;
        infinite?: boolean;
        initialSlide?: number;
        lazyLoad?: boolean;
        rtl?: boolean;
        slide?: string;
        slidesToShow?: number;
        slidesToScroll?: number;
        speed?: number;
        swipe?: boolean;
        swipeToSlide?: boolean;
        touchMove?: boolean;
        touchThreshold?: number;
        variableWidth?: boolean;
        useCSS?: boolean;
        slickGoTo?: number;
    }

    declare export class Carousel extends React.Component<CarouselProps> {}

    /* ----------------- Spin TYPES --------------------- */

    declare export interface SpinProps {
        prefixCls?: string;
        className?: string;
        spinning?: boolean;
        size?: 'small' | 'default' | 'large';
        tip?: string;
        delay?: number;
        wrapperClassName?: string;
    }

    declare export class Spin extends React.Component<SpinProps> {}

    /* ----------------- Checkbox Group TYPES --------------------- */
    declare export type CheckboxValueType = string | number;

    declare export interface CheckboxOptionType {
        label: string;
        value: CheckboxValueType;
        disabled?: boolean;
    }

    declare export interface AbstractCheckboxGroupProps {
        prefixCls?: string;
        className?: string;
        options?: Array<CheckboxOptionType | string>;
        disabled?: boolean;
        style?: Object;
    }

    declare export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
        defaultValue?: Array<CheckboxValueType>;
        value?: Array<CheckboxValueType>;
        onChange?: (checkedValue: Array<CheckboxValueType>) => void;
    }

    declare class CheckboxGroup extends React.Component<CheckboxGroupProps> {}

    /* ----------------- Checkbox TYPES --------------------- */

    declare export interface AbstractCheckboxProps {
        prefixCls?: string;
        className?: string;
        defaultChecked?: boolean;
        checked?: boolean;
        style?: Object;
        disabled?: boolean;
        onChange?: ({
            target: { ...$Exact<AbstractCheckboxProps>, checked: boolean },
            stopPropogation: () => void,
            preventDefault(): () => void,
        }) => void;
        onMouseEnter?: (SyntheticEvent<any>) => void;
        onMouseLeave?: (SyntheticEvent<any>) => void;
        value?: any;
        name?: string;
        children?: React.Node;
    }

    declare export interface CheckboxProps extends AbstractCheckboxProps {
        indeterminate?: boolean;
    }

    declare export class Checkbox extends React.Component<CheckboxProps> {
        static Group: typeof CheckboxGroup;
    }

    /* ----------------- Dropdown ----------------- */

    declare export interface DropDownProps {
        trigger?: ('click' | 'hover')[];
        overlay: React.Node;
        style?: Object;
        onVisibleChange?: (visible?: boolean) => void;
        visible?: boolean;
        disabled?: boolean;
        align?: Object;
        getPopupContainer?: (triggerNode: Element) => HTMLElement;
        prefixCls?: string;
        className?: string;
        placement?:
            | 'topLeft'
            | 'topCenter'
            | 'topRight'
            | 'bottomLeft'
            | 'bottomCenter'
            | 'bottomRight';
    }
    declare export interface DropdownButtonProps extends ButtonGroupProps, DropDownProps {
        type?: 'primary' | 'ghost' | 'dashed';
        disabled?: boolean;
        onClick?: (SyntheticEvent<MouseEventHandler<any>>) => void;
        children?: any;
    }
    declare export class DropdownButton extends React.Component<DropdownButtonProps> {}

    declare export class Dropdown extends React.Component<DropDownProps> {
        static Button: typeof DropdownButton;
    }

    /* ------------------- DatePicker ------------------ */

    declare export function generateShowHourMinuteSecond(
        format: string,
    ): {
        showHour: boolean,
        showMinute: boolean,
        showSecond: boolean,
    };
    declare export interface TimePickerProps {
        className?: string;
        size?: 'large' | 'default' | 'small';
        value?: moment$Moment;
        defaultValue?: moment$Moment;
        open?: boolean;
        format?: string;
        onChange?: (time: moment$Moment, timeString: string) => void;
        onOpenChange?: (open: boolean) => void;
        disabled?: boolean;
        placeholder?: string;
        prefixCls?: string;
        hideDisabledOptions?: boolean;
        disabledHours?: () => number[];
        disabledMinutes?: (selectedHour: number) => number[];
        disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
        style?: Object;
        getPopupContainer?: (triggerNode: Element) => HTMLElement;
        addon?: Function;
        use12Hours?: boolean;
    }

    declare export interface PickerProps {
        prefixCls?: string;
        inputPrefixCls?: string;
        format?: string;
        disabled?: boolean;
        allowClear?: boolean;
        className?: string;
        style?: Object;
        popupStyle?: Object;
        locale?: any;
        size?: 'large' | 'small' | 'default';
        getCalendarContainer?: (triggerNode: Element) => HTMLElement;
        open?: boolean;
        onOpenChange?: (status: boolean) => void;
        disabledDate?: (current: moment$Moment) => boolean;
        renderExtraFooter?: () => React.Node;
    }
    declare export interface SinglePickerProps {
        value?: moment$Moment;
        defaultValue?: moment$Moment;
        defaultPickerValue?: moment$Moment;
        onChange?: (date: moment$Moment, dateString: string) => void;
    }
    declare export interface DatePickerProps extends PickerProps, SinglePickerProps {
        className?: string;
        showTime?: TimePickerProps | boolean;
        showToday?: boolean;
        open?: boolean;
        toggleOpen?: (e: {
            open: boolean,
        }) => void;
        disabledTime?: (
            current: moment$Moment,
        ) => {
            disabledHours?: () => number[],
            disabledMinutes?: () => number[],
            disabledSeconds?: () => number[],
        };
        onOpenChange?: (status: boolean) => void;
        onOk?: (selectedTime: moment$Moment) => void;
        placeholder?: string;
    }
    declare export interface MonthPickerProps extends PickerProps, SinglePickerProps {
        className?: string;
        placeholder?: string;
    }
    declare export interface RangePickerProps extends PickerProps {
        className?: string;
        value?: [moment$Moment, moment$Moment];
        defaultValue?: [moment$Moment, moment$Moment];
        defaultPickerValue?: [moment$Moment, moment$Moment];
        onChange?: (dates: [moment$Moment, moment$Moment], dateStrings: [string, string]) => void;
        onOk?: (selectedTime: moment$Moment) => void;
        showTime?: TimePickerProps | boolean;
        ranges?: {
            [range: string]: moment$Moment[],
        };
        placeholder?: [string, string];
        disabledTime?: (
            current: moment$Moment,
            type: string,
        ) => {
            disabledHours?: () => number[],
            disabledMinutes?: () => number[],
            disabledSeconds?: () => number[],
        };
    }

    declare export interface DatePicker extends React.Component<DatePickerProps> {
        RangePicker: React.Component<RangePickerProps>;
        MonthPicker: React.Component<MonthPickerProps>;
    }

    /* --------------- TimePicker ------------- */
    declare export function generateShowHourMinuteSecond(
        format: string,
    ): {
        showHour: boolean,
        showMinute: boolean,
        showSecond: boolean,
    };
    declare export class TimePicker extends React.Component<TimePickerProps> {}

    /* --------------- Select ------------- */
    declare export interface AbstractSelectProps {
        prefixCls?: string;
        className?: string;
        size?: 'default' | 'large' | 'small';
        notFoundContent?: ?React.Node;
        transitionName?: string;
        choiceTransitionName?: string;
        showSearch?: boolean;
        allowClear?: boolean;
        disabled?: boolean;
        style?: Object;
        placeholder?: string;
        dropdownClassName?: string;
        dropdownStyle?: Object;
        dropdownMenuStyle?: Object;
        onSearch?: (value: string) => any;
        filterOption?: boolean | ((inputValue: string, option: Object) => any);
    }

    declare export interface LabeledValue {
        key: string;
        label: React.Node;
    }

    declare export type SelectValue = string | any[] | LabeledValue | LabeledValue[];

    declare export interface SelectProps extends AbstractSelectProps {
        value?: SelectValue;
        defaultValue?: SelectValue;
        mode?: 'default' | 'multiple' | 'tags' | 'combobox';
        multiple?: boolean;
        tags?: boolean;
        combobox?: boolean;
        optionLabelProp?: string;
        onChange?: (value: SelectValue) => void;
        onSelect?: (value: SelectValue, option: Object) => any;
        onDeselect?: (value: SelectValue) => any;
        onBlur?: () => any;
        onFocus?: () => any;
        dropdownMatchSelectWidth?: boolean;
        optionFilterProp?: string;
        defaultActiveFirstOption?: boolean;
        labelInValue?: boolean;
        getPopupContainer?: (triggerNode: Element) => HTMLElement;
        tokenSeparators?: string[];
        getInputElement?: () => React.Element<any>;
    }

    declare export interface OptionProps {
        disabled?: boolean;
        value?: any;
        title?: string;
    }
    declare export interface OptGroupProps {
        label?: string | React.Element<any>;
    }
    declare export interface SelectContext {
        antLocale?: {
            Select?: any,
        };
    }
    declare export class Select extends React.Component<SelectProps> {
        static Option: React.ComponentType<OptionProps>;
        static OptGroup: React.ComponentType<OptGroupProps>;
    }

    /* Notifications */
    declare export type NotificationPlacement =
        | 'topLeft'
        | 'topRight'
        | 'bottomLeft'
        | 'bottomRight';
    declare export interface NotificationConfigProps {
        top?: number;
        bottom?: number;
        duration?: number;
        placement?: NotificationPlacement;
        getContainer?: () => HTMLElement;
    }
    declare export interface NotificationArgsProps {
        message: React.Node;
        description: React.Node;
        btn?: React.Node;
        key?: string;
        onClose?: () => void;
        duration?: number;
        icon?: React.Node;
        placement?: NotificationPlacement;
        style?: Object;
        prefixCls?: string;
        className?: string;
        type?: string;
    }

    declare export interface NotificationApi {
        success(args: NotificationArgsProps): void;
        error(args: NotificationArgsProps): void;
        info(args: NotificationArgsProps): void;
        warn(args: NotificationArgsProps): void;
        warning(args: NotificationArgsProps): void;
        open(args: NotificationArgsProps): void;
        close(key: string): void;
        config(options: NotificationConfigProps): void;
        destroy(): void;
    }

    declare export var notification: NotificationApi;

    declare export interface PopoverProps extends AbstractTooltipProps {
        title?: React.Node;
        content?: React.Node;
    }
    declare export class Popover extends React.Component<PopoverProps> {
        refs: {
            tooltip: Tooltip,
        };
    }

    /* --------------------- MESSAGES ---------------- */
    declare export type ConfigOnClose = () => void;

    declare export interface ConfigOptions {
        top?: number;
        duration?: number;
        prefixCls?: string;
        getContainer?: () => HTMLElement;
    }

    declare export var message: {
        info(content: React.Node, duration?: ?number, onClose?: ?ConfigOnClose): () => void,
        success(content: React.Node, duration?: ?number, onClose?: ?ConfigOnClose): () => void,
        error(content: React.Node, duration?: ?number, onClose?: ?ConfigOnClose): () => void,
        warn(content: React.Node, duration?: ?number, onClose?: ?ConfigOnClose): () => void,
        warning(content: React.Node, duration?: ?number, onClose?: ?ConfigOnClose): () => void,
        loading(content: React.Node, duration?: ?number, onClose?: ?ConfigOnClose): () => void,
        config(options: ConfigOptions): void,
        destroy(): void,
    };

    /* -------------------- INPUT NUMBER --------------------- */
    declare export interface InputNumberProps {
        prefixCls?: string;
        min?: number;
        max?: number;
        value?: number;
        step?: number | string;
        defaultValue?: number;
        onChange?: (value?: number | string) => void;
        disabled?: boolean;
        size?: 'large' | 'small' | 'default';
        formatter?: (value?: number | string) => string;
        parser?: (displayValue?: string) => number;
        placeholder?: string;
        style?: Object;
        className?: string;
        name?: string;
        id?: string;
        precision?: number;
    }
    declare export class InputNumber extends React.Component<InputNumberProps> {}

    /* ----------------------- Radio -------------------- */

    declare class CheckboxGroup extends React.Component<CheckboxGroupProps> {
        getOptions(): CheckboxOptionType[];
        toggleOption: (option: any) => void;
    }

    declare export interface RadioGroupProps extends AbstractCheckboxGroupProps {
        defaultValue?: any;
        value?: any;
        size?: 'large' | 'default' | 'small';
        onChange?: (e: SyntheticInputEvent<HTMLInputElement>) => void;
        onMouseEnter?: (e: SyntheticMouseEvent<HTMLInputElement>) => void;
        onMouseLeave?: (e: SyntheticMouseEvent<HTMLInputElement>) => void;
        name?: string;
    }
    declare export class RadioGroup extends React.Component<RadioGroupProps> {
        onRadioChange: (ev: any) => void;
    }
    declare export class Checkbox extends React.Component<CheckboxProps> {
        static Group: typeof CheckboxGroup;
    }
    declare export type RadioButtonProps = AbstractCheckboxProps;
    declare export class RadioButton extends React.Component<RadioButtonProps> {}

    declare export type RadioProps = AbstractCheckboxProps;
    declare export class Radio extends React.Component<RadioProps> {
        static Group: typeof RadioGroup;
        static Button: typeof RadioButton;
    }

    /* -------------- LocaleProvider ------------------ */

    declare export interface ModalLocale {
        okText: string;
        cancelText: string;
        justOkText: string;
    }
    declare export function changeConfirmLocale(newLocale?: ModalLocale): void;
    declare export function getConfirmLocale(): ModalLocale;
    declare export interface LocaleProviderProps {
        locale: {
            Pagination?: Object,
            DatePicker?: Object,
            TimePicker?: Object,
            Calendar?: Object,
            Table?: Object,
            Modal?: ModalLocale,
            Popconfirm?: Object,
            Transfer?: Object,
            Select?: Object,
            Upload?: Object,
        };
        children?: React.Element<any>;
    }
    declare export class LocaleProvider extends React.Component<LocaleProviderProps> {}

    /* ------------- PAGINATION ----------- */
    declare export interface PaginationProps {
        total: number;
        defaultCurrent?: number;
        current?: number;
        defaultPageSize?: number;
        pageSize?: number;
        onChange?: (page: number, pageSize: number) => void;
        showSizeChanger?: boolean;
        pageSizeOptions?: string[];
        onShowSizeChange?: (current: number, size: number) => void;
        showQuickJumper?: boolean;
        showTotal?: (total: number, range: [number, number]) => React.Node;
        size?: string;
        simple?: boolean;
        style?: Object;
        locale?: Object;
        className?: string;
        prefixCls?: string;
        selectPrefixCls?: string;
        itemRender?: (
            page: number,
            type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
        ) => React.Node;
    }
    declare export class Pagination extends React.Component<PaginationProps> {}

    /* ------------- TABLE --------------- */
    declare interface ColumnProps<T> {
        title?: React.Node;
        key?: string;
        dataIndex?: string;
        render?: (text: any, record: T, index: number) => React.Node;
        filters?: {
            text: string,
            value: string,
            children?: any[],
        }[];
        onFilter?: (value: any, record: T) => boolean;
        filterMultiple?: boolean;
        filterDropdown?: React.Node;
        filterDropdownVisible?: boolean;
        onFilterDropdownVisibleChange?: (visible: boolean) => void;
        sorter?: boolean | ((a: any, b: any) => number);
        colSpan?: number;
        width?: string | number;
        className?: string;
        fixed?: boolean | ('left' | 'right');
        filterIcon?: React.Node;
        filteredValue?: any[];
        sortOrder?: boolean | ('ascend' | 'descend');
        children?: ColumnProps<T>[];
        onCellClick?: (record: T, event: any) => void;
    }
    declare class Column<T> extends React.Component<ColumnProps<T>> {}

    declare interface TableStore {
        setState: (partial: Object) => void;
        getState: () => any;
        subscribe: (listener: () => void) => () => void;
    }

    declare interface SelectionDecorator {
        key: string;
        text: React.Node;
        onSelect: (changeableRowKeys: string[]) => void;
    }
    declare interface SelectionCheckboxAllProps {
        store: TableStore;
        locale: any;
        disabled: boolean;
        getCheckboxPropsByItem: (item: any, index: number) => any;
        getRecordKey: (record: any, index?: number) => string;
        data: any[];
        prefixCls?: string;
        onSelect: (key: string, index: number, selectFunc: any) => void;
        hideDefaultSelections?: boolean;
        selections?: SelectionDecorator[] | boolean;
        getPopupContainer: (triggerNode?: Element) => HTMLElement;
    }
    declare class SelectionCheckboxAll extends React.Component<SelectionCheckboxAllProps> {}

    declare interface ColumnGroupProps {
        title?: React.Node;
    }

    declare class ColumnGroup extends React.Component<ColumnGroupProps> {
        static __ANT_TABLE_COLUMN_GROUP: boolean;
    }

    declare type TableColumnConfig<T> = ColumnProps<T>;

    declare export interface TableRowSelection<T> {
        type?: 'checkbox' | 'radio';
        selectedRowKeys?: string[] | number[];
        onChange?: (selectedRowKeys: string[] | number[], selectedRows: Object[]) => any;
        getCheckboxProps?: (record: T) => Object;
        onSelect?: (record: T, selected: boolean, selectedRows: Object[]) => any;
        onSelectAll?: (selected: boolean, selectedRows: Object[], changeRows: Object[]) => any;
        onSelectInvert?: (selectedRows: Object[]) => any;
        selections?: SelectionDecorator[] | boolean;
        hideDefaultSelections?: boolean;
    }

    declare export interface TableProps<T> {
        prefixCls?: string;
        dropdownPrefixCls?: string;
        rowSelection?: TableRowSelection<T>;
        pagination?: PaginationProps | boolean;
        size?: 'default' | 'middle' | 'small';
        dataSource?: T[];
        columns?: ColumnProps<T>[];
        rowKey?: string | ((record: T, index: number) => string);
        rowClassName?: (record: T, index: number) => string;
        expandedRowRender?: any;
        defaultExpandedRowKeys?: string[] | number[];
        expandedRowKeys?: string[] | number[];
        expandIconAsCell?: boolean;
        expandIconColumnIndex?: number;
        onExpandedRowsChange?: (expandedRowKeys: string[] | number[]) => void;
        onExpand?: (expanded: boolean, record: T) => void;
        onChange?: (
            pagination: PaginationProps | boolean,
            filters: string[],
            sorter: Object,
        ) => any;
        loading?: boolean | SpinProps;
        locale?: Object;
        indentSize?: number;
        onRowClick?: (record: T, index: number, event: Event) => any;
        useFixedHeader?: boolean;
        bordered?: boolean;
        showHeader?: boolean;
        footer?: (currentPageData: Object[]) => React.Node;
        title?: (currentPageData: Object[]) => React.Node;
        scroll?: {
            x?: boolean | number | string,
            y?: boolean | number | string,
        };
        childrenColumnName?: string;
        bodyStyle?: Object;
        className?: string;
        style?: Object;
    }

    declare export class Table<T> extends React.Component<TableProps<T>> {
        static Column: typeof Column;
        static ColumnGroup: typeof ColumnGroup;
    }

    /* --------------------- Tree ---------------------- */

    declare export interface AntTreeNodeProps {
        disabled?: boolean;
        disableCheckbox?: boolean;
        title?: string | React.Node;
        key?: string;
        isLeaf?: boolean;
    }
    declare export class AntTreeNode extends React.Component<AntTreeNodeProps, {}> {}
    declare export interface AntTreeNodeEvent {
        event: 'check' | 'select';
        node: AntTreeNode;
        checked?: boolean;
        checkedNodes?: Array<AntTreeNode>;
        selected?: boolean;
        selectedNodes?: Array<AntTreeNode>;
    }
    declare export interface AntTreeNodeMouseEvent {
        node: AntTreeNode;
        event: (SyntheticMouseEvent<HTMLElement>) => void;
    }
    declare export interface TreeProps {
        showLine?: boolean;
        className?: string;
        /** 是否支持多选 */
        multiple?: boolean;
        /** 是否自动展开父节点 */
        autoExpandParent?: boolean;
        /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
        checkStrictly?: boolean;
        /** 是否支持选中 */
        checkable?: boolean;
        /** 默认展开所有树节点 */
        defaultExpandAll?: boolean;
        /** 默认展开指定的树节点 */
        defaultExpandedKeys?: Array<string>;
        /** （受控）展开指定的树节点 */
        expandedKeys?: Array<string>;
        /** （受控）选中复选框的树节点 */
        checkedKeys?:
            | Array<string>
            | {
                  checked: Array<string>,
                  halfChecked: Array<string>,
              };
        /** 默认选中复选框的树节点 */
        defaultCheckedKeys?: Array<string>;
        /** （受控）设置选中的树节点 */
        selectedKeys?: Array<string>;
        /** 默认选中的树节点 */
        defaultSelectedKeys?: Array<string>;
        /** 展开/收起节点时触发 */
        onExpand?: (
            expandedKeys: Array<string>,
            info: {
                node: AntTreeNode,
                expanded: boolean,
            },
        ) => void | Promise<any>;
        /** 点击复选框触发 */
        onCheck?: (checkedKeys: Array<string>, e: AntTreeNodeEvent) => void;
        /** 点击树节点触发 */
        onSelect?: (selectedKeys: Array<string>, e: AntTreeNodeEvent) => void;
        /** filter some AntTreeNodes as you need. it should return true */
        filterAntTreeNode?: (node: AntTreeNode) => boolean;
        /** 异步加载数据 */
        loadData?: (node: AntTreeNode) => Promise<any>;
        /** 响应右键点击 */
        onRightClick?: (options: AntTreeNodeMouseEvent) => void;
        /** 设置节点可拖拽（IE>8）*/
        draggable?: boolean;
        /** 开始拖拽时调用 */
        onDragStart?: (options: AntTreeNodeMouseEvent) => void;
        /** dragenter 触发时调用 */
        onDragEnter?: (options: AntTreeNodeMouseEvent) => void;
        /** dragover 触发时调用 */
        onDragOver?: (options: AntTreeNodeMouseEvent) => void;
        /** dragleave 触发时调用 */
        onDragLeave?: (options: AntTreeNodeMouseEvent) => void;
        /** drop 触发时调用 */
        onDrop?: (options: AntTreeNodeMouseEvent) => void;
        style?: Object;
        prefixCls?: string;
        filterTreeNode?: (node: AntTreeNode) => boolean;
    }
    declare export class Tree extends React.Component<TreeProps, any> {
        static TreeNode: any;
        static defaultProps: {
            prefixCls: string,
            checkable: boolean,
            showIcon: boolean,
            openAnimation: {
                enter(node: any, done: any): any,
                leave(node: any, done: any): any,
                appear(node: any, done: any): any,
            },
        };
    }

    /* ------------------- Slider ---------------------- */

    declare export type SliderMarks = {
        [key: number]:
            | React.Node
            | {
                  style: Object,
                  label: React.Node,
              },
    };
    declare export type SliderValue = number | [number, number];
    declare export interface SliderProps {
        prefixCls?: string;
        tooltipPrefixCls?: string;
        range?: boolean;
        min?: number;
        max?: number;
        step?: number | void;
        marks?: SliderMarks;
        dots?: boolean;
        value?: SliderValue;
        defaultValue?: SliderValue;
        included?: boolean;
        disabled?: boolean;
        vertical?: boolean;
        onChange?: (value: SliderValue) => void;
        onAfterChange?: (value: SliderValue) => void;
        tipFormatter?: void | ((value: number) => React.Node);
        className?: string;
        id?: string;
    }
    declare export class Slider extends React.Component<SliderProps, any> {
        toggleTooltipVisible: (index: any, visible: any) => void;
        handleWithTooltip: (props: {
            [x: string]: any,
            value: any,
            dragging: any,
            index: any,
        }) => React.Node;
    }
    /* -------------------- Steps ------------------ */
    declare export interface StepsProps {
        prefixCls?: string;
        iconPrefix?: string;
        current?: number;
        status?: 'wait' | 'process' | 'finish' | 'error';
        size?: 'default' | 'small';
        direction?: 'horizontal' | 'vertical';
        progressDot?: boolean | Function;
    }

    declare export interface StepProps {
        children?: React.ChildrenArray<React.ElementType<{ onChange?: (object: Object) => void }>>;
    }
    declare export class Steps extends React.Component<StepsProps, any> {
        static Step: React.ComponentType<StepProps>;
    }

    /* ------------------ALERT------------------ */
    declare export interface AlertProps {
        /**
         * Type of Alert styles, options:`success`, `info`, `warning`, `error`
         */
        type?: 'success' | 'info' | 'warning' | 'error';
        /** Whether Alert can be closed */
        closable?: boolean;
        /** Close text to show */
        closeText?: React.Node;
        /** Content of Alert */
        message: React.Node;
        /** Additional content of Alert */
        description?: React.Node;
        /** Callback when close Alert */
        onClose?: (SyntheticMouseEvent<HTMLAnchorElement>) => void;
        /** Whether to show icon */
        showIcon?: boolean;
        style?: Object;
        prefixCls?: string;
        className?: string;
        banner?: boolean;
    }
    declare export class Alert extends React.Component<AlertProps> {}

    /* ------------------- LIST ----------------------- */
    /// <reference types="react" />
    // export { ListItemProps, ListItemMetaProps } from './Item';
    /// <reference types="react" />
    declare export interface ListItemProps {
        className?: string;
        children?: React.Node;
        prefixCls?: string;
        style?: Object;
        extra?: React.Node;
        actions?: Array<React.Node>;
        grid?: ListGridType;
    }
    declare export interface ListItemMetaProps {
        avatar?: React.Node;
        className?: string;
        children?: React.Node;
        description?: React.Node;
        prefixCls?: string;
        style?: Object;
        title?: React.Node;
    }
    declare var Meta: (props: ListItemMetaProps) => React.Node;
    declare class ListItem extends React.Component<ListItemProps, any> {
        static Meta: typeof Meta;
    }

    declare export type ColumnCount = 1 | 2 | 3 | 4 | 6 | 8 | 12 | 24;
    declare export type ColumnType = 'gutter' | 'column' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    declare export interface ListGridType {
        gutter?: number;
        column?: ColumnCount;
        xs?: ColumnCount;
        sm?: ColumnCount;
        md?: ColumnCount;
        lg?: ColumnCount;
        xl?: ColumnCount;
        xxl?: ColumnCount;
    }
    declare export type ListSize = 'small' | 'default' | 'large';
    declare export interface ListProps {
        bordered?: boolean;
        className?: string;
        children?: React.Node;
        dataSource: any;
        extra?: React.Node;
        grid?: ListGridType;
        id?: string;
        itemLayout?: string;
        loading?: boolean | SpinProps;
        loadMore?: React.Node;
        pagination?: any;
        prefixCls?: string;
        rowKey?: any;
        renderItem: any;
        size?: ListSize;
        split?: boolean;
        header?: React.Node;
        footer?: React.Node;
        locale?: Object;
    }
    declare export interface ListLocale {
        emptyText: string;
    }
    declare export class List extends React.Component<ListProps> {
        static Item: typeof ListItem;
    }

    /* -------------- BREADCRUMB ----------------- */
    /// <reference types="react" />
    declare export interface BreadcrumbItemProps {
        prefixCls?: string;
        separator?: React.ReactNode;
        href?: string;
    }
    declare export class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {
        static __ANT_BREADCRUMB_ITEM: boolean;
    }

    declare export interface Route {
        path: string;
        breadcrumbName: string;
    }
    declare export interface BreadcrumbProps {
        prefixCls?: string;
        routes?: Route[];
        params?: any;
        separator?: React.Node;
        itemRender?: (
            route: any,
            params: any,
            routes: Array<any>,
            paths: Array<string>,
        ) => React.Node;
        style?: Object;
        className?: string;
    }
    declare export class Breadcrumb extends React.Component<BreadcrumbProps, any> {
        static Item: typeof BreadcrumbItem;
    }
}
