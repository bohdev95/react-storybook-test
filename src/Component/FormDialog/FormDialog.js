import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function FormDialog({ callback }) {
	const [open, setOpen] = React.useState(false);
	const [text, setText] = React.useState("")
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		callback(text)
		setOpen(false);
	};
	return (
		<Box sx={{ display: "flex", alignitems: 'center', justifyContent: "center", my: 1 }}>
			<Button variant="contained" onClick={handleClickOpen}>
				Save Status
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Save Status</DialogTitle>
				<DialogContent>
					<TextField
						onChange={(e) => { setText(e.target.value) }}
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="text"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Save</Button>
				</DialogActions>
			</Dialog>
		</Box >
	);
}