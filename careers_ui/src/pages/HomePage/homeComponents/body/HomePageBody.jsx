import React, { useState } from 'react';
import { 
    Box, 
    ImageList, 
    ImageListItem, 
    ImageListItemBar, 
    IconButton, 
    useMediaQuery, 
    Typography, 
    Modal, 
    Button 
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';
import SlidingQuotesCarousel from './Sliding';

// Component to handle expandable descriptions
function ExpandableDescription({ text, onClick }) {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded((prev) => !prev);
        if (!expanded) onClick(); // Open modal when description is expanded
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return `${text.substring(0, maxLength)}...`;
    };

    return (
        <Typography
            onClick={handleToggle}
            style={{ cursor: 'pointer', color: 'inherit' }}
        >
            {expanded ? text : truncateText(text, 100)}
        </Typography>
    );
}

export default function TitlebarImageList() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));

    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '' });

    const getCols = () => {
        if (isXs) return 1;
        if (isSm) return 1;
        if (isMd) return 3;
        return 4;
    };

    const handleOpenModal = (title, description) => {
        setModalContent({ title, description });
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ width: '100%', height: 'auto', overflowY: 'auto', p: 2 }}>
            <SlidingQuotesCarousel />

            <ImageList variant="masonry" cols={getCols()} gap={16}>
                <ImageListItem key="Subheader" cols={getCols()} style={{ height: 'auto' }} />

                {itemData.map((item) => (
                    <ImageListItem 
                        key={item.img} 
                        cols={item.cols || 1} 
                        rows={item.rows || 1} 
                        sx={{ mb: 4 }}  // Added space between items
                    >
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                            style={{ 
                                borderRadius: '10px', 
                                objectFit: 'cover', 
                                width: '100%', 
                                height: '100%' 
                            }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={
                                <ExpandableDescription 
                                    text={item.description} 
                                    onClick={() => handleOpenModal(item.title, item.description)} 
                                />
                            }
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* Modal for displaying full description */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
    sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '90%',  // 90% width for extra-small and small screens
            sm: '80%',  // 80% width for small screens
            md: 400,    // 400px width for medium and larger screens
        },
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '15px',
        p: {
            xs: 2,      // Smaller padding for extra-small screens
            sm: 3,      // Medium padding for small screens
            md: 4,      // Larger padding for medium and larger screens
        },
    }}
>
    <Typography id="modal-title" variant="h6" component="h2">
        {modalContent.title}
    </Typography>
    <Typography id="modal-description" sx={{ mt: 2 }}>
        {modalContent.description}
    </Typography>
    <Button onClick={handleCloseModal} sx={{ mt: 2 }} variant="contained">
        Close
    </Button>
</Box>

            </Modal>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://media.istockphoto.com/id/1449172934/photo/it-developer-typing-on-pc-and-laptop-with-programming-code-on-screen-using-php-language.jpg?s=612x612&w=0&k=20&c=VDcOrjFoKFY3okK3LsPpD45w97PQOYSzVqlPGMoouFM=',
        title: 'Data Scientist',
        description: 'Data scientists analyze complex data sets to extract insights and make data-driven decisions. They use statistical techniques, machine learning, and data visualization to help organizations understand trends and patterns in their data.',
    },
    {
        img: 'https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=1024x1024&w=is&k=20&c=N65ufLsxvt6b5XaKSitmu09gDUhEitFqfM4cWG7CTMk=',
        title: 'Digital Marketing Specialist',
        description: 'Digital marketing specialists design and implement online marketing strategies to promote products and services. They work with social media, search engine optimization (SEO), content marketing, and pay-per-click (PPC) advertising to engage audiences and drive conversions.',
    },
    {
        img: 'https://media.istockphoto.com/id/1194430786/photo/smart-male-it-programer-working-on-desktop-computer-in-data-center-technical-system-control.jpg?s=612x612&w=0&k=20&c=kkizFj7oWRg2cJPPIb8pVr3HgDSWNaPe2T9SqsP0yHU=',
        title: 'Cybersecurity Analyst',
        description: 'Cybersecurity analysts protect an organization’s computer systems and networks from cyber threats. They monitor networks for security breaches, develop security policies, and implement measures to safeguard sensitive data.',
    },
    {
        img: 'https://media.istockphoto.com/id/1187585345/photo/user-experience-teamwork-mobile-ux-ui-designers-working-at-co-working-space-workroom.jpg?s=612x612&w=0&k=20&c=yZypSf8XsIKKlrwHfozjZTnMpAB1cSe_0jsilaCqgvg=',
        title: 'UX/UI Designer',
        description: 'UX/UI designers create user-friendly and visually appealing interfaces for digital products. They focus on enhancing user experience by designing intuitive layouts and interactions, ensuring that products are both functional and aesthetically pleasing.',
        cols: 2,
    },
    {
        img: 'https://media.istockphoto.com/id/1438553832/photo/scientists-team-collect-water-samples-for-analysis-and-research-on-water-quality-environment.jpg?s=612x612&w=0&k=20&c=zs27PBk-tzvyQjqOJeN8Oy-Q2uKIfR3aBLQL7E7XYZI=',
        title: 'Environmental Scientist',
        description: 'Environmental scientists study the natural environment and develop solutions to environmental problems. They conduct research on issues like pollution, conservation, and climate change, and work with governments and organizations to implement sustainable practices.',
        cols: 2,
    },
    {
        img: 'https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU=',
        title: 'Software Engineer',
        description: 'Software engineers design, develop, and maintain software applications. They use programming languages and frameworks to build software solutions for various industries, from mobile apps to enterprise systems.',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://media.istockphoto.com/id/486359911/photo/hospital-administrator-team.jpg?s=612x612&w=0&k=20&c=rSq03qYqYoLPXK5Ho-p0RpDrmdqBa1hdgmiDrR8g_cs=',
        title: 'Healthcare Administrator',
        description: 'Healthcare administrators manage the operations of healthcare facilities, such as hospitals and clinics. They oversee budgeting, staffing, and regulatory compliance to ensure efficient and effective delivery of healthcare services.',
    },
    {
        img: 'https://media.istockphoto.com/id/1191609321/photo/graphic-designer-drawing-sketches-logo-design.jpg?s=612x612&w=0&k=20&c=UOJSXYUWaPwMa3urhbzmY7yuDiQUeKYIAMb08bNk2Sk=',
        title: 'Graphic Designer',
        description: 'Graphic designers create visual content for various media, including print, digital, and social platforms. They use typography, color, and imagery to communicate ideas and brand messages effectively.',
    },
    {
        img: 'https://media.istockphoto.com/id/1219401451/photo/female-industrial-engineer-or-technician-worker-in-hard-helmet-and-uniform-using-laptop.jpg?s=612x612&w=0&k=20&c=VGreKtxovSwbF9pNyXxpmLWslKd7NZXWGAoNiOhZhFY=',
        title: 'Mechanical Engineer',
        description: 'Mechanical engineers design and develop mechanical systems and devices. They work on projects ranging from small components to large machinery, applying principles of physics and material science to create efficient and reliable products.',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg=',
        title: 'Human Resources Manager',
        description: 'Human resources managers oversee the recruitment, training, and development of an organization’s workforce. They manage employee relations, compensation, benefits, and compliance with labor laws.',
    },
    {
        img: 'https://media.istockphoto.com/id/1157269312/photo/businesspeople-analyzing-cadastre-map-on-computer.jpg?s=612x612&w=0&k=20&c=28Jf_7Fj4f0HjvZ7wRg2Ut_0DFBFD8pfeSUHDpoT7ao=',
        title: 'Urban Planner',
        description: 'Urban planners develop plans and programs for land use in urban areas. They work to create sustainable and functional communities by balancing economic, social, and environmental factors in their planning efforts.',
    },
    {
        img: 'https://media.istockphoto.com/id/1209892070/photo/genetic-engineering-concept-medical-science-scientific-laboratory.jpg?s=612x612&w=0&k=20&c=_znCWocWYymwxFqDbAdabFI2Ccbs0pw350BM8esPadw=',
        title: 'Biomedical Engineer',
        description: 'Biomedical engineers design and develop medical devices and equipment. They work at the intersection of engineering and healthcare to create technologies that improve patient care and treatment outcomes.',
        cols: 2,
    },
];
