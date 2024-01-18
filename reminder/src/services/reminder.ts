import axios from "axios";

class ReminderService{
    http = axios.create(
        {
            baseURL:'https://jsonplaceholder.typicode.com/'
        }
    )
}