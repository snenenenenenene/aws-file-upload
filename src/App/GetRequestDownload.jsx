import React from 'react';

class GetRequestDownload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            presigned_download_url: null,
        };
    }

    async componentDidMount() {
    }

    async generatePresignedURL(){

        var file_uuid = document.getElementById('uuid-input').value;

        const response = await fetch(`https://hek46ulrnc.execute-api.us-east-1.amazonaws.com/prod/download?file=${file_uuid}`);
        const data = await response.json();
        console.log(data);
        this.setState({ presigned_download_url: data.URL })
        
    } 

    render() {
        const { presigned_download_url } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Download Files</h5>
                <div className="card-body">
                    <a href={presigned_download_url}>Download</a>
                </div>
                <input type="text" name="uuid-input" id="uuid-input" />
                <button onClick={async() => {await this.generatePresignedURL();}}>Generate Presigned URL</button>
            </div>
        );
    }
}

export { GetRequestDownload }; 