import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "Admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "John Doe",
        email: "John@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name: "Jane Doe",
        email: "Jane@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    }
]

export default users