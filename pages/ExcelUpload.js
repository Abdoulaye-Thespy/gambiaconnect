import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryStr = e.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // Prendre la première feuille
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setData(sheetData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcelUploader;
