import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            base_url: null
        };
    }

    async componentDidMount(){

    }

    async post_get_Handler(file) {
        var fullPath = document.getElementById('fileinput').value;
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
        
            // SEND GET
            const response = await fetch(`https://hek46ulrnc.execute-api.us-east-1.amazonaws.com/prod/upload?file=${filename}`);
            const data = await response.json();
            
            this.setState({ base_url: data.URL.url + data.URL.fields.key })

            // POST
            let form = new FormData();
            Object.keys(data.URL.fields).forEach(key => form.append(key, data.URL.fields[key]));
            form.append('file', file)
            
            //SEND POST
            const post_response = await fetch(data.URL.url, { method: 'POST', body: form });
            if (!post_response.ok) {
                console.log('Failed to upload via presigned POST');
            }
            console.log(`File uploaded via presigned POST with key: ${data.URL.key}`);
        }
    }

    uploadFile = () => {
        console.log("upload file pressed...");
        const fileinput = document.getElementById('fileinput');
        let file = fileinput.files[0];
        this.post_get_Handler(file);
    }

    render() {
        const { base_url} = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Upload Files</h5>
                <div className="card-body">
                    <p>{base_url}</p>
                </div>
                <div>
                    <strong>Choose a file</strong><br/>
                    <input type="file" id="fileinput" />
                    <input type="button" id="uploadbutton" onClick={this.uploadFile} value="Upload" />
                </div>
            </div>
        );
    }
}

export { GetRequest }; 