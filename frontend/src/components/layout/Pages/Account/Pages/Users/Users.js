import React from "react";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      personalInformations: {
        firstname: "Nehemie",
        lastname: "Mombanga",
        dateOfBirth: "04/02/1999",
        address: {
          country: "France",
          houseNo: 20,
          supplement: "",
          city: "Tourcoing",
          region: "Nord",
          postalCode: "59200",
        },
        phoneNumber: "+33 7 41 43 43 34",
        documents: {
          identityCard:
            "https://static.euronews.com/articles/stories/06/35/53/24/1440x810_cmsv2_548e11b5-0a57-53f4-88d9-5ea703413300-6355324.jpg",
          licence:
            "https://images.eplaque.fr/wp-content/uploads/2020/04/18145834/Visuel-permis-conduire-recto2.jpg",
        },
      },
      logs: {
        email: "nehemie@gmail.com",
        password: "password1234",
      },
    },
  ];

  return USERS;
};

export default Users;
