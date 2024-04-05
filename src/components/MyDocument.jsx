import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, sunt, quia quis ea nemo nam sapiente placeat voluptatem sit libero eligendi, pariatur cum. Quia molestias incidunt sit facilis. Aut vero odio, suscipit officia quisquam deleniti deserunt dolores esse recusandae neque, laboriosam nisi est labore ducimus quis commodi id voluptatibus ab minima! Inventore et excepturi nostrum praesentium laudantium libero, sed quo sint. Commodi aspernatur velit reiciendis eos voluptatibus unde porro! At ipsum inventore esse, sed eaque repellat quibusdam autem quisquam, maxime commodi totam mollitia tenetur soluta, impedit distinctio rerum aliquam nihil excepturi molestias perferendis asperiores rem debitis animi aperiam. Laudantium ratione corrupti non libero tempora eum officiis, voluptatem repudiandae magni nisi molestias iste hic delectus mollitia vel iure, quod rem. Eaque incidunt illo eligendi impedit soluta cumque ea, perferendis doloribus, expedita esse deserunt labore nemo commodi adipisci nisi suscipit nostrum odio earum dicta, quaerat totam architecto reprehenderit tempore. Odit, tenetur. Sapiente ut quidem saepe ullam voluptate molestiae placeat, omnis perferendis optio, debitis necessitatibus iure doloribus odit quo. Delectus, atque suscipit corporis nostrum dicta culpa libero illo, accusantium vitae tempore reiciendis consectetur magnam expedita quos omnis provident harum aut voluptate nulla quis ratione doloribus magni sunt. Voluptatum exercitationem ipsam laborum neque dicta?</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;