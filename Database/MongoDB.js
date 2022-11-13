const mongoose = require("mongoose");
const MongoModel = require(`../Database/Model.js`);

function MongoSearch(CourseName, Semester, FindMethod, SearchValue, responses) {
  const MongoURL = `mongodb+srv://Ankan157:Ankan1567@projectcluster.q1ops.mongodb.net/${CourseName}?retryWrites=true&w=majority`;
  // BA Connection
  if (CourseName == "BA_Results") {
    mongoose
      .connect(
        MongoURL
      )
      .then(() => {
        console.log("Connected with BA_Results");
        // BA First Semester
        if (Semester == "1st Semester") {
          if (FindMethod == "RegistrationNumber") {
            console.log("I am here 1st");
            MongoModel.FirstSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FirstSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BA Second Semester
        else if (Semester == "2nd Semester") {
          if (FindMethod == "RegistrationNumber") {
            console.log("I am here 2nd");
            MongoModel.SecondSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.SecondSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BA 3rd Semester
        else if (Semester == "3rd Semester") {
          if (FindMethod == "RegistrationNumber") {
            console.log("I am here 3rd");
            MongoModel.ThirdSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.ThirdSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BA 4th Semester
        else if (Semester == "4th Semester") {
          if (FindMethod == "RegistrationNumber") {
            console.log("I am here 4th");
            MongoModel.FourthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FourthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BA Fifth Semester
        else if (Semester == "5th Semester") {
          if (FindMethod == "RegistrationNumber") {
            console.log("I am here 5th");
            MongoModel.FifthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FifthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BA Sixth Semester
        else if (Semester == "6th Semester") {
          if (FindMethod == "RegistrationNumber") {
            console.log("I am here 6th");
            MongoModel.SixthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.SixthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(404)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // End of BA Semesters Code
      })
      .catch((BAConnectionError) => {
        console.log(BAConnectionError);
        responses.status(502).json({ status: "Unable To Connect With Server" });
      });
  }
  // B Com Connection
  else if (CourseName == "BCom_Results") {
    mongoose
      .connect(
        MongoURL
      )
      .then(() => {
        console.log("Connected With BCom_Results");
        // B Com 1st Semester
        if (Semester == "1st Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.FirstSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FirstSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // B Com 2nd Semester
        else if (Semester == "2nd Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.SecondSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.SecondSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // B Com 3rd Semester
        else if (Semester == "3rd Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.ThirdSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.ThirdSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // B Com 4th Semester
        else if (Semester == "4th Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.FourthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FourthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // B Com 5th Semester
        else if (Semester == "5th Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.FifthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FifthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // B Com 6th Semester
        else if (Semester == "6th Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.SixthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.SixthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // End of BCom Semester Code
      })
      .catch((BcomConnectionerror) => {
        console.log(BcomConnectionerror);
        responses.status(502).json({ status: "Unable To Connect With Server" });
      });
  }
  // BSc Connection
  else if (CourseName == "BSC_Results") {
    mongoose
      .connect(
        MongoURL
      )
      .then(() => {
        console.log("Connected With BSC_Results");
        // BSc 1st Semester
        if (Semester == "1st Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.FirstSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FirstSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BSc 2nd Semester
        else if (Semester == "2nd Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.SecondSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.SecondSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BSc 3rd Semester
        else if (Semester == "3rd Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.ThirdSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.ThirdSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BSc 4th Semester
        else if (Semester == "4th Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.FourthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FourthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BSc Fifth Semester
        else if (Semester == "5th Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.FifthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.FifthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // BSc Sixth Semester
        else if (Semester == "6th Semester") {
          if (FindMethod == "RegistrationNumber") {
            MongoModel.SixthSemModel.find(
              { Column3: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          } else if (FindMethod == "RollNumber") {
            MongoModel.SixthSemModel.find(
              { Column1: SearchValue },
              (error, data) => {
                if (error) {
                  responses
                    .status(502)
                    .json({ status: "Unable To Get Your Result Right Now" });
                  mongoose.connection.close();
                } else if (data) {
                  console.log(data);
                  responses.status(200).json(data);
                  mongoose.connection.close();
                }
              }
            );
          }
        }
        // End of BSc Semester Code
      })
      .catch((BScConnectionerror) => {
        console.log(BScConnectionerror);
        responses.status(502).json({ status: "Unable To Connect With Server" });
      });
  }
}
module.exports.MongoSearch = MongoSearch;