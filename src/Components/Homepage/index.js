import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress, MenuItem } from "@material-ui/core";
import * as yup from "yup";

import Products from "../Products";

import { Sizes } from "../../Utils";
import { useStyles } from "../../Styles";

import "./styles.css";

const schema = yup.object({
	nameKeyword: yup.string().required("You need to put a name."),
	sizeKeyword: yup.string().required("Please, choose a size."),
});

export default function Homepage({ keywordStore }) {
	const [initialized, setInitialized] = React.useState(false);
	const [test, setTest] = useState();
	const classes = useStyles();

	const handleSubmit = async (values, { setSubmitting }) => {
		setSubmitting(false);

		localStorage.setItem("keywords", JSON.stringify(values));
		await keywordStore.setKeywords(values.nameKeyword, values.sizeKeyword);
	};

	//----   eslint-disable-next-line
	// useEffect(() => {
	// 	if (!initialized) {
	// 		keywordStore.setKeywords(localStorage.getItem("keywords") || "");
	// 		setInitialized(true);
	// 	}
	// });

	useEffect(() => {
		console.log(keywordStore.keywords);
		// keywordStore.keywords.nameKeyword &&
		// 	setTest(keywordStore.keywords.nameKeyword);
	}, [keywordStore.keywords]);

	return (
		<div className="container flex-column flex-1">
			<p className="flex-1" id="mainTitle">
				Set the querys:
			</p>

			<div className="flex-1">
				<Formik
					validationSchema={schema}
					onSubmit={handleSubmit}
					initialValues={{
						nameKeyword: "",
						sizeKeyword: "",
					}}
				>
					{({
						submitForm,
						isSubmitting,
						errors,
						touched,
						handleChange,
					}) => (
						<Form>
							<Field
								className={classes.input}
								component={TextField}
								error={
									errors.nameKeyword && touched.nameKeyword
								}
								helperText={errors.nameKeyword}
								name="nameKeyword"
								type="name"
								label="Sneaker Name"
								size="small"
								variant="outlined"
								color="secondary"
							/>

							<Field
								className={classes.input}
								component={TextField}
								error={
									errors.sizeKeyword && touched.sizeKeyword
								}
								helperText={errors.sizeKeyword}
								name="sizeKeyword"
								select
								type="name"
								label="Sneaker Size"
								onChange={handleChange}
								variant="outlined"
								size="small"
							>
								{Sizes.map((option) => (
									<MenuItem
										key={option.value}
										value={option.value}
									>
										{option.label}
									</MenuItem>
								))}
							</Field>

							{isSubmitting && <LinearProgress />}

							<Button
								variant="contained"
								color="primary"
								disabled={isSubmitting}
								onClick={submitForm}
							>
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</div>

			<Products keywordStore={keywordStore} />
		</div>
	);
}
