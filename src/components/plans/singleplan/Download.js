import React, {Component} from 'react';
import { PDFDownloadLink, Document, Page, Image, View, StyleSheet, Text } from '@react-pdf/renderer';
import moment from 'moment';




const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    page: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
        fontFamily: 'Open Sans'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',

    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',

    },
    image: {
        width: '60%',
        marginVertical: 15,
        marginHorizontal: 100,
    },
    madeBy: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});



const MyDoc = (props)=>(


        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.title}>PROJECT NAME: {props.header}</Text>


                <Text style={styles.body}>Date & Time: {moment(props.date).format('LLLL')}</Text>
                <Image
                    style={styles.image}
                    src="https://deadhomersociety.files.wordpress.com/2016/04/round-springfield17.png"/>
                <Text style={styles.text}>Description: {props.description}</Text>

                <Text style={styles.text}>Notes: {props.notes}</Text>
                <Text style={styles.text}>Participants: {props.participants}</Text>
                <Text style={styles.text}>latitude:{props.latitude}</Text>
                <Text style={styles.text}>longitude:{props.longitude}</Text>
                <Text style={styles.text}>Location: {props.location}</Text>
                <Text style={styles.madeBy}> Created using SKP</Text>

            </Page>
        </Document>
)

const Download = (props) => (
    <div>
        <PDFDownloadLink
            document={<MyDoc id={props.id} date={props.date} header={props.header} description={props.description} participants={props.participants} location={props.location} notes={props.notes} coordinates={props.coordinates} referencePictures={props.referencePictures}/>}
            fileName="myplan.pdf"
            style={{
                textDecoration: "none",
                padding: "5px",
                color: "#4a4a4a",
                backgroundColor: "#f2f2f2",
                border: "1px solid #4a4a4a"
            }}
        >
            {({ blob, url, loading, error }) =>
                (loading ? 'Loading document...' : 'Download as pdf')}
        </PDFDownloadLink>
    </div>
)
export default Download;