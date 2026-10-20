from setuptools import setup, find_packages

setup(
    name='apiverve_removepunctuation',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Remove Punctuation strips punctuation marks from any submitted text string and returns the cleaned text. Paid plans add the total count and a list of every punctuation character removed.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/removepunctuation?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
