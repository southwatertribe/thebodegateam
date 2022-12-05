//Claass purpose to handel functionality of all review SCOres of CFO Shop

class CFOReviewsDbServices {
  static getCFOReviewDbInstance() {
    return instance ? instance : new CFOShopDbServices();
  }

  //       *********  Create Functionality OF DB for CFO SHOP Reviews  ********

  //Function purpose to add a new CFO review to the CFO review Table
  async setCFOReview(CFOReviewScore, CFODescription, CFOId) {
    const CFOReviewInSertData = [CFOReviewScore, CFODescription, CFOId];

    const response = await new Promise((resolve, reject) => {
      const sqlInsert = ``;

      connection.query(sqlInsert, CFOInsertData, (err, resuslts) => {
        if (err) reject(new Error(err.message));
        resolve(resuslts);
      });
    });

    return response;
  }
  catch(error) {
    console.log(error);
  }

  //       *********  Read Functionality OF DB for CFO SHOP Reviews  ********

  //       *********  Update Functionality OF DB for CFO SHOP Reviews  ********

  //       *********  Delete Functionality OF DB for CFO SHOP Reviews  ********
} // End function
