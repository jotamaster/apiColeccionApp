const config  = {
    // server port
    port : 3002,
    encryp_secret : "secretomaximoenelmundo",
    //jwt claims
    jwtOptions : {
        aud: 'http://xxx.xxx.xxx.xxx',
        iss: 'jrivera'
      },
    // connectionString
    db: {
        mysql: {
            dev: {
                type: "mysql",
                host: "127.0.0.1",
                port: 3306,
                username: "root",
                password: "",
                database: "dbcolect"
            },
            prd: ""
        }
    }
};

export default config;