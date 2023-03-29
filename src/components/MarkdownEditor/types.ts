import { RequestContextType } from "@providers/request-provider";
import { ContentDetails } from "@features/blog/ContentEdit/types";
import { ICommand, ICommandBase } from "@uiw/react-md-editor";

type textChangeFunc = (value: string | undefined) => void;

export interface ExtendedCommandBase<T> extends ICommandBase<T>{
    networkContext: RequestContextType,
    contentDetails: ContentDetails,
};

export interface CommandContext {
    networkContext: RequestContextType,
    contentDetails: ContentDetails,
};

export interface MarkdownEditorProps {
  value: string;
  onChange: textChangeFunc;
  isReadOnly: boolean | undefined;
  networkContext: RequestContextType,
  contentDetails: ContentDetails,
}