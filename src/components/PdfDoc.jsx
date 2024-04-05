import { format } from '@formkit/tempo';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 20,
        width: '100%'
    },
    pageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        color: '#252525',
        fontSize: 24,
        borderBottomColor: '#252525',
        borderBottomWidth: 2,
    },
    tableContainer: {
        flexDirection: 'column',
        width: '100%',
        border: 2,
        borderColor: '#252525',
    },
    rowContainer: {
        borderBottomColor: '#858585',
        borderBottom: 1,
        borderTop: 0,
        flexDirection: 'row',
        width: '100%'
    },
    cell: {
        borderRightColor: '#bbb',
        borderRightWidth: 1,
        padding: 5,
        width: '100%',
    },
    persons: {
        width: '40%',
        textAlign: 'center',
        paddingHorizontal: 5
    },
    header: {
        backgroundColor: '#E4E4E4',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        flexDirection: 'row',
        width: '100%',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#bbb',

    },
    headerCell: {
        borderRightWidth: 1,
        borderRightColor: '#888',
    },
    evencell: {
        backgroundColor: '#aaa'
    }
})


const PdfDoc = ({ reservas, date }) => (
    console.log(reservas),
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.pageHeader}>
                <Text>Personas:
                    {
                        reservas.reduce((acc, reserva) => acc + reserva.personas, 0)   // I need to implement a function that counts the total number of people
                    }
                </Text>
                <Text> Cumples:
                    {
                        reservas.reduce((acc, reserva) => acc + (reserva.cumple ? 1 : 0), 0) // I need to implement a function that counts the total number of birthdays    
                    }
                </Text>
                <Text>
                    {format(date, 'dddd, D MMMM, YYYY', 'es')}
                </Text>
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.header}>
                    <Text style={[styles.cell, styles.headerCell]}>Nombre</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Cédula</Text>
                    <Text style={[styles.cell, styles.persons, styles.headerCell]}>P</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Cumple</Text>
                </View>
                {reservas.map((reserva, index) => (
                    <View key={reserva.id}
                        style={index % 2 === 0 ? [styles.rowContainer, styles.evencell] : styles.rowContainer}
                    >
                        <Text style={styles.cell}>{reserva.nombre}</Text>
                        <Text style={styles.cell}>{reserva.cedula}</Text>
                        <Text style={[styles.cell, styles.persons]}>{reserva.personas}</Text>
                        <Text style={[styles.cell, { textAlign: 'center' }]}>{reserva.cumple ? 'SI' : '-'}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
)

export default PdfDoc;