const tools = [
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
    name: "To Hex",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          return char.charCodeAt(0).toString(16);
        })
        .join("");
    },
  },
  {
    name: "From Hex",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
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
          return char.charCodeAt(0).toString(2);
        })
        .join("");
    },
  },
  {
    name: "From Binary",
    html: <></>,
    compute: (input) => {
      return input
        .split("")
        .map((char) => {
          return String.fromCharCode(parseInt(char, 2));
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
];

export default tools;
