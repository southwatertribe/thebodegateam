//Claass purpose to handel functionality of all review SCOres of CFO Shop

class CFOReviewsDbServices {
  static getCFOReviewDbInstance() {
    return instance ? instance : new CFOShopDbServices();
  }

  //       *********  Create Functionality OF DB for CFO SHOP Reviews  ********

  //Function purpose to add a new CFO review to the CFO review Table (Not Completed)
  async setCFOReview(CFOReviewScore, CFODescription, CFOId) {
    try {
      const CFOReviewInSertData = [CFOReviewScore, CFODescription, CFOId];

      const response = await new Promise((resolve, reject) => {
        const sqlInsert = `INSERT INTO Reviews(review_score, review_description, CFO_id_review) VALUES (?, ?,?);`;

        connection.query(sqlInsert, CFOReviewInSertData, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //       *********  Read Functionality OF DB for CFO SHOP Reviews  ********

  //Fucntion purppose to pull the CFO Review score from the DB give a CFO ID (Not Completed)
  async readCFOReview(CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = ``;

        connection.query(sqlSelect, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
  //       *********  Update Functionality OF DB for CFO SHOP Reviews  ********

  //Fucntion purppose to update the CFO Review score from the DB give a CFO Review ID (Not Completed)
  async updateCFOReview(CFOReviewId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate = ``;

        connection.query(sqlUpdate, CFOReviewId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
  //       *********  Delete Functionality OF DB for CFO SHOP Reviews  ********
  //Fucntion purppose to Delete the CFO Review score from the DB given a CFO Review ID (Not Completed)
  async udeleteCFOReview(CFOReviewId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlDelete = ``;

        connection.query(sqlDelete, CFOReviewId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
} // End function
