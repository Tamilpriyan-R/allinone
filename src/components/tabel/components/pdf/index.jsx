import FileOpenIcon from "@mui/icons-material/FileOpen";

const TabelPdf = ({ url }) => {
  return (
    <a
      href={url}
      style={{
        color: "grey",
        fontSize: "18px",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FileOpenIcon />
    </a>
  );
};

export default TabelPdf;
