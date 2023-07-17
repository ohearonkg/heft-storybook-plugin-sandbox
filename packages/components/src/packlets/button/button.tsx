import React from "react";
import classNames, { ArgumentArray } from "classnames";
import styles from "./button.module.scss";

const BUTTON_KINDS = ["PRIMARY", "SECONDARY"] as const;
type ButtonKind = (typeof BUTTON_KINDS)[number];

interface IButtonProps extends React.ComponentPropsWithRef<"button"> {
  kind: ButtonKind;
}

const cx: (...args: ArgumentArray) => string = classNames.bind(styles);

export function Button({
  children,
  kind,
  className,
  ...rest
}: IButtonProps): JSX.Element {
  const composedClassName: string = cx(
    {
      [styles.buttonKindPrimary]: kind === "PRIMARY",
      [styles.buttonKindSecondary]: kind === "SECONDARY",
    },
    className
  );

  return (
    <button className={composedClassName} {...rest}>
      {children}
    </button>
  );
}
