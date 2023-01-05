/* eslint-disable @typescript-eslint/no-empty-function */
import Toastify from "toastify-js";

import SuccessAvatar from "@/assets/images/util/success.png";

export function toastSuccess(text: string) {
  Toastify({
    text,
    duration: 100000,
    gravity: `bottom`, // `top` or `bottom`
    position: `left`,
    avatar: SuccessAvatar,
    style: {
      background: `rgb(238 242 255)`,
      border: `1px solid`,
      borderColor: `rgb(79 70 229)`,
      borderRadius: `0.5rem`,
      fontSize: `0.875rem`,
      color: `rgb(79 70 229)`,
      paddingLeft: `1rem`,
      paddingRight: `1rem`,
      paddingTop: `0.8rem`,
      paddingBottom: `0.9rem`,
      position: `fixed`,
      right: `7.4%`,
      marginBottom: `1%`,
      zIndex: `999`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: `row-reverse`,
    },
    onClick() {}, // Callback after click
  }).showToast();
}
