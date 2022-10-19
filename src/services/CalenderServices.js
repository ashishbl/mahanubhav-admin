import requests from "./httpService";

const CalenderServices = {
  getAllBook() {
    return requests.post("/mahanubhav/get-books", {});
  },

  getBookById(id) {
    return requests.post(`/mahanubhav/get-book-by-id`, { _id: id });
  },

  addBook(body) {
    return requests.post("/mahanubhav/create-book", body);
  },

  updateBook(body) {
    return requests.post(`/mahanubhav/update-book`, body);
  },

  deleteBook(id) {
    return requests.post(`/mahanubhav/delete-books`, { _id: id });
  },
  getAllBhajans() {
    return requests.post("/mahanubhav/get-bhajans", {});
  },
  createBhajan(body) {
    return requests.post("/mahanubhav/create-bhajan", body);
  },
  getBhajanById(id) {
    return requests.post("/mahanubhav/get-bhajan-by-id", { _id: id });
  },
  updateBhajan(body) {
    return requests.post(`/mahanubhav/update-bhajan`, body);
  },
  deleteBhajan(id) {
    return requests.post(`/mahanubhav/delete-bhajans`, { _id: id });
  },
  getQuestions() {
    return requests.post(`/mahanubhav/get-questions`, {});
  },
  updateAnswer(id, ans) {
    return requests.post(`/mahanubhav/update-answer`, { _id: id, answer: ans });
  },
  monthUpload(body) {
    return requests.post(`/mahanubhav/month-upolad`, body);
  },
  getMonthData(month, year) {
    return requests.post("/mahanubhav/month", { month: year, year: year });
  },
  getDateByMonth(month, year) {
    return requests.post("/mahanubhav/get-dates-by-month", {
      month: month,
      year: year,
    });
  },
  createUpdateDate(obj) {
    return requests.post("/mahanubhav/createupdate-date", obj);
  },

  createUpdateDayEvent(
    _id,
    dt,
    evetitle,
    evedescription,
    evestart,
    eveend,
    evecategory
  ) {
    return requests.post("/mahanubhav/createupdate-event", {
      _id: _id,
      date: dt,
      title: evetitle,
      description: evedescription,
      start: evestart,
      end: eveend,
      eventCategory: evecategory,
    });
  },
  monthHoroscope(obj) {
    return requests.post("/mahanubhav/month-horoscope", {
      month: obj.month,
      year: obj.year,
      horoscope: obj.horoscope,
    });
  },

  getDateDataByMonth(day) {
    return requests.post("/mahanubhav/get-datedata-by-date", { date: day });
  },

  getAdvertisement() {
    return requests.post(
      "http://165.232.181.53:5055/api/mahanubhav/get-advertisement",
      {}
    );
  },

  addAdvertisement(body) {
    return requests.post(
      "http://165.232.181.53:5055/api/mahanubhav/create-advertisement",
      body
    );
  },
  sendNotification(name, body, title) {
    return requests.post(
      "http://165.232.181.53:5055/api/mahanubhav/create-notification",
      {
        name,
        body,
        title,
      }
    );
  },
  getNotification() {
    return requests.get("/mahanubhav/get-notifications", {});
  },

  createSubAdmin(name, email, phone, password, role) {
    return requests.post("/admin/add", {
      name,
      email,
      phone,
      password,
      role,
    });
  },



  //mahurat
  getMahurat(obj) {
    return requests.post("/mahanubhav/get-mahurat-by-month", obj);
  },

  createUpdateMahurat(obj) {
    return requests.post("/mahanubhav/createupdate-mahurat", obj);
  },

  deleteMahurat(obj) {
    return requests.post("/mahanubhav/delete-mahurat", obj);
  },
};

export default CalenderServices;
