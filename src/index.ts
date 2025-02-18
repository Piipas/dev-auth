import minimist from "minimist";

const processCommandOptions = async (args: minimist.ParsedArgs) => {
  const endpoint = args.e || args.endpoint;
  const login = args.l || args.login;
  const password = args.p || args.password;
  const loginFieldname = args["login-fieldname"];
  const passwordFieldname = args["password-fieldname"];
  const tokenFieldname = args["token-fieldname"];

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        [loginFieldname]: String(login),
        [passwordFieldname]: String(password),
      }),
    });

    const data = await response.json();
    const token = data?.[tokenFieldname];

    console.log(`Token of the user with username/email ${login}: `);
    console.log("\x1b[32m%s\x1b[0m", token);
  } catch (error) {
    console.log(error);
  }
};

export default processCommandOptions;
