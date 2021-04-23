import axios from 'axios';

export const fetchMembreList = (Membres) => {
    axios.get('https://theindependentgamers.fr/api/membre/membre')
      .then((response) => {
        // console.log(response.data)
        Membres(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

export const fetchStaffsList = (Staffs) => {
    axios.get('https://theindependentgamers.fr/api/membre/staff')
      .then((response) => {
        // console.log(response.data)
        Staffs(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };

export const fetchAdminsList = (Admins) => {
    axios.get('https://theindependentgamers.fr/api/membre/admin')
      .then((response) => {
        // console.log(response.data)
        Admins(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("tout c'est bien passé !");
      });
  };
