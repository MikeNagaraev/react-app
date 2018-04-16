import React from "react";
import { Form, Input } from "semantic-ui-react";


class SearchMovieForm extends React.PureComponent { // pure Component
    render() {
        return (
            <Form>
                <Input placeholder='Search film...' />
            </Form>
        )
    }
}

export default SearchMovieForm;