import { Request, Response, NextFunction } from "express";
import JsonData from "../../utils/data.json"


export const homepage = async ( req: Request, res: Response, next: NextFunction) => {
  // Static data on first render
    let data = JsonData.stats
    let filteredData = JsonData.allData

  res.render("index", {data,filteredData});
};


export const homepageData = async ( req: Request, res: Response, next: NextFunction) => {
  // Static data on first render

  const {tabName} = req.query
  let filteredData = JsonData.whaleData
  let data = JsonData.stats


  if(tabName === "nav-all") {
    console.log(tabName)
    filteredData = JsonData.allData
  }
  else if(tabName === "nav-whale") {
    console.log(tabName)
    filteredData = JsonData.whaleData
    console.log(filteredData, "filteredData whale")
  }
  else if(tabName === "nav-new") {
    console.log(tabName)
    filteredData = JsonData.newData
  }
 
  res.status(200).send(filteredData);
};


