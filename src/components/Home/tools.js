const tools = [
  {
    name: "To Hex",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          return char.charCodeAt(0).toString(16);
        })
        .join(" ");
    },
  },
  {
    name: "From Hex",
    html: <></>,
    compute: (input) => {
      return input
        .split(" ")
        .map((char) => {
          return String.fromCharCode(parseInt(char, 16));
        })
        .join("");
    },
  },
  {
    name: "To Binary",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          return (char.charCodeAt(0) - 30).toString(2);
        })
        .join(" ");
    },
  },
  {
    name: "From Binary",
    html: <></>,
    compute: (input) => {
      return input
        .split(" ")
        .map((char) => {
          return String.fromCharCode(parseInt(char, 2) + 30);
        })
        .join("");
    },
  },
  {
    name: "To Hexdump",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          return char.charCodeAt(0).toString(16);
        })
        .join(" ");
    },
  },
  {
    name: "From Hexdump",
    html: <></>,
    compute: (input) => {
      return input
        .split(" ")
        .map((char) => {
          return String.fromCharCode(parseInt(char, 16));
        })
        .join("");
    },
  },
  {
    name: "To Octal",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          return char.charCodeAt(0).toString(8);
        })
        .join(" ");
    },
  },
  {
    name: "From Octal",
    html: <></>,
    compute: (input) => {
      return input
        .split(" ")
        .map((char) => {
          return String.fromCharCode(parseInt(char, 8));
        })
        .join("");
    },
  },
  {
    name: "Reverse",
    html: <></>,
    compute: (input) => {
      return input.split("").reverse().join("");
    },
  },
  {
    name: "To Base64",
    html: <></>,
    compute: (input) => {
      return btoa(input);
    },
  },
  {
    name: "From Base64",
    html: <></>,
    compute: (input) => {
      return atob(input);
    },
  },
  {
    name: "ROT13 Cipher",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          if (char.match(/[a-z]/i)) {
            return String.fromCharCode(
              char.charCodeAt(0) + (char.toUpperCase() <= "M" ? 13 : -13)
            );
          } else {
            return char;
          }
        })
        .join("");
    },
  },
  {
    name: "Vigenere Cipher",
    html: (
      <div className="input">
        <input type="text" placeholder="Key" />
      </div>
    ),
    compute: (input, key) => {
      return input
        .split("")
        .map((char, index) => {
          return String.fromCharCode(
            ((char.charCodeAt(0) - 32 + key.charCodeAt(index % key.length)) %
              95) +
              32
          );
        })
        .join("");
    },
  },
  {
    name: "Caesar Cipher",
    html: (
      <div className="input">
        <input type="number" placeholder="Shift" />
      </div>
    ),
    compute: (input, shift) => {
      return input
        .split("")
        .map((char) => {
          return String.fromCharCode(
            ((char.charCodeAt(0) - 32 + shift) % 95) + 32
          );
        })
        .join("");
    },
  },
  // {
  //   name: "HTML Beautifier",
  //   html: <></>,
  //   compute: (input) => {
  //     return BeautifyHtml(input, 2);
  //   },
  // },
];

export default tools;
