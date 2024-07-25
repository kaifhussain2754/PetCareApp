import React, { useEffect, useState } from 'react';
import { getCareRecords, deleteCareRecord } from '../services/apiService'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Alert, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CareRecordsTable = () => {
  const [careRecords, setCareRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCareRecords = async () => {
      try {
        const records = await getCareRecords();
        setCareRecords(records);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching care records:', error);
        setError('Failed to fetch care records');
        setLoading(false);
      }
    };

    fetchCareRecords();
  }, []);

  const renderField = (value) => value ? value : 'N/A';

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString(); // Customize the date format here
  };

  const handleEdit = (id) => {
    navigate(`/edit-care-record/${id}`); // Redirect to the edit page with the record ID
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await deleteCareRecord(id); // Call the API function to delete the record
        setCareRecords(careRecords.filter(record => record.id !== id)); // Remove the record from the state
      } catch (error) {
        console.error('Error deleting care record:', error);
        alert('Failed to delete the record');
      }
    }
  };

  const handleAddRecord = () => {
    navigate('/add-care-record'); // Navigate to the add record page
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Care Records
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="warning"
            onClick={handleAddRecord}
            style={{ marginRight: 8 }}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 4 }} />
            Add Record
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBack}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 4 }} />
            Back
          </Button>
        </Box>
      </Box>
      <TableContainer component="div" className="table-responsive" style={{ marginTop: '20px' }}>
        <Table className="table-hover">
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#fff'}}>Name</TableCell>
              <TableCell style={{color: '#fff'}}>Location</TableCell>
              <TableCell style={{color: '#fff'}}>Notes</TableCell>
              <TableCell style={{color: '#fff'}}>Date</TableCell>
              <TableCell style={{color: '#fff'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {careRecords.length > 0 ? (
              careRecords.map((record) => (
                <TableRow
                  key={record.id}
                  onMouseEnter={() => setHoveredRow(record.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    backgroundColor: hoveredRow === record.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <TableCell style={{color: '#fff'}}>{renderField(record.name)}</TableCell>
                  <TableCell style={{color: '#fff'}}>{renderField(record.location)}</TableCell>
                  <TableCell style={{color: '#fff'}}>{renderField(record.notes)}</TableCell>
                  <TableCell style={{color: '#fff'}}>{renderField(formatDate(record.timestamp))}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handleEdit(record.id)}
                      style={{ marginRight: 8 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(record.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="5" style={{ textAlign: 'center' }}>
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CareRecordsTable;
